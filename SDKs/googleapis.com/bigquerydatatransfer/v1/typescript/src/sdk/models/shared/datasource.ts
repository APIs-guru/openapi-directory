import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DataSourceParameter } from "./datasourceparameter";

export enum DataSourceAuthorizationTypeEnum {
    AuthorizationTypeUnspecified = "AUTHORIZATION_TYPE_UNSPECIFIED"
,    AuthorizationCode = "AUTHORIZATION_CODE"
,    GooglePlusAuthorizationCode = "GOOGLE_PLUS_AUTHORIZATION_CODE"
,    FirstPartyOauth = "FIRST_PARTY_OAUTH"
}

export enum DataSourceDataRefreshTypeEnum {
    DataRefreshTypeUnspecified = "DATA_REFRESH_TYPE_UNSPECIFIED"
,    SlidingWindow = "SLIDING_WINDOW"
,    CustomSlidingWindow = "CUSTOM_SLIDING_WINDOW"
}

export enum DataSourceTransferTypeEnum {
    TransferTypeUnspecified = "TRANSFER_TYPE_UNSPECIFIED"
,    Batch = "BATCH"
,    Streaming = "STREAMING"
}


// DataSource
/** 
 * Defines the properties and custom parameters for a data source.
**/
export class DataSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorizationType" })
  authorizationType?: DataSourceAuthorizationTypeEnum;

  @Metadata({ data: "json, name=clientId" })
  clientId?: string;

  @Metadata({ data: "json, name=dataRefreshType" })
  dataRefreshType?: DataSourceDataRefreshTypeEnum;

  @Metadata({ data: "json, name=dataSourceId" })
  dataSourceId?: string;

  @Metadata({ data: "json, name=defaultDataRefreshWindowDays" })
  defaultDataRefreshWindowDays?: number;

  @Metadata({ data: "json, name=defaultSchedule" })
  defaultSchedule?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=helpUrl" })
  helpUrl?: string;

  @Metadata({ data: "json, name=manualRunsDisabled" })
  manualRunsDisabled?: boolean;

  @Metadata({ data: "json, name=minimumScheduleInterval" })
  minimumScheduleInterval?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=parameters", elemType: shared.DataSourceParameter })
  parameters?: DataSourceParameter[];

  @Metadata({ data: "json, name=scopes" })
  scopes?: string[];

  @Metadata({ data: "json, name=supportsCustomSchedule" })
  supportsCustomSchedule?: boolean;

  @Metadata({ data: "json, name=supportsMultipleTransfers" })
  supportsMultipleTransfers?: boolean;

  @Metadata({ data: "json, name=transferType" })
  transferType?: DataSourceTransferTypeEnum;

  @Metadata({ data: "json, name=updateDeadlineSeconds" })
  updateDeadlineSeconds?: number;
}
