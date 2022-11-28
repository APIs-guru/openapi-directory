import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataSourceParameter } from "./datasourceparameter";


export enum DataSourceAuthorizationTypeEnum {
    AuthorizationTypeUnspecified = "AUTHORIZATION_TYPE_UNSPECIFIED",
    AuthorizationCode = "AUTHORIZATION_CODE",
    GooglePlusAuthorizationCode = "GOOGLE_PLUS_AUTHORIZATION_CODE",
    FirstPartyOauth = "FIRST_PARTY_OAUTH"
}

export enum DataSourceDataRefreshTypeEnum {
    DataRefreshTypeUnspecified = "DATA_REFRESH_TYPE_UNSPECIFIED",
    SlidingWindow = "SLIDING_WINDOW",
    CustomSlidingWindow = "CUSTOM_SLIDING_WINDOW"
}

export enum DataSourceTransferTypeEnum {
    TransferTypeUnspecified = "TRANSFER_TYPE_UNSPECIFIED",
    Batch = "BATCH",
    Streaming = "STREAMING"
}


// DataSource
/** 
 * Defines the properties and custom parameters for a data source.
**/
export class DataSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorizationType" })
  authorizationType?: DataSourceAuthorizationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=clientId" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=dataRefreshType" })
  dataRefreshType?: DataSourceDataRefreshTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=dataSourceId" })
  dataSourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultDataRefreshWindowDays" })
  defaultDataRefreshWindowDays?: number;

  @SpeakeasyMetadata({ data: "json, name=defaultSchedule" })
  defaultSchedule?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=helpUrl" })
  helpUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=manualRunsDisabled" })
  manualRunsDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=minimumScheduleInterval" })
  minimumScheduleInterval?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=parameters", elemType: DataSourceParameter })
  parameters?: DataSourceParameter[];

  @SpeakeasyMetadata({ data: "json, name=scopes" })
  scopes?: string[];

  @SpeakeasyMetadata({ data: "json, name=supportsCustomSchedule" })
  supportsCustomSchedule?: boolean;

  @SpeakeasyMetadata({ data: "json, name=supportsMultipleTransfers" })
  supportsMultipleTransfers?: boolean;

  @SpeakeasyMetadata({ data: "json, name=transferType" })
  transferType?: DataSourceTransferTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=updateDeadlineSeconds" })
  updateDeadlineSeconds?: number;
}
