import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EmailPreferences } from "./emailpreferences";
import { UserInfo } from "./userinfo";
import { ScheduleOptions } from "./scheduleoptions";


export enum TransferConfigStateEnum {
    TransferStateUnspecified = "TRANSFER_STATE_UNSPECIFIED",
    Pending = "PENDING",
    Running = "RUNNING",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Cancelled = "CANCELLED"
}


// TransferConfigInput
/** 
 * Represents a data transfer configuration. A transfer configuration contains all metadata needed to perform a data transfer. For example, `destination_dataset_id` specifies where data should be stored. When a new transfer configuration is created, the specified `destination_dataset_id` is created when needed and shared with the appropriate data source service account.
**/
export class TransferConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataRefreshWindowDays" })
  dataRefreshWindowDays?: number;

  @SpeakeasyMetadata({ data: "json, name=dataSourceId" })
  dataSourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=destinationDatasetId" })
  destinationDatasetId?: string;

  @SpeakeasyMetadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=emailPreferences" })
  emailPreferences?: EmailPreferences;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notificationPubsubTopic" })
  notificationPubsubTopic?: string;

  @SpeakeasyMetadata({ data: "json, name=ownerInfo" })
  ownerInfo?: UserInfo;

  @SpeakeasyMetadata({ data: "json, name=params" })
  params?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=schedule" })
  schedule?: string;

  @SpeakeasyMetadata({ data: "json, name=scheduleOptions" })
  scheduleOptions?: ScheduleOptions;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;
}


// TransferConfig
/** 
 * Represents a data transfer configuration. A transfer configuration contains all metadata needed to perform a data transfer. For example, `destination_dataset_id` specifies where data should be stored. When a new transfer configuration is created, the specified `destination_dataset_id` is created when needed and shared with the appropriate data source service account.
**/
export class TransferConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataRefreshWindowDays" })
  dataRefreshWindowDays?: number;

  @SpeakeasyMetadata({ data: "json, name=dataSourceId" })
  dataSourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=datasetRegion" })
  datasetRegion?: string;

  @SpeakeasyMetadata({ data: "json, name=destinationDatasetId" })
  destinationDatasetId?: string;

  @SpeakeasyMetadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=emailPreferences" })
  emailPreferences?: EmailPreferences;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nextRunTime" })
  nextRunTime?: string;

  @SpeakeasyMetadata({ data: "json, name=notificationPubsubTopic" })
  notificationPubsubTopic?: string;

  @SpeakeasyMetadata({ data: "json, name=ownerInfo" })
  ownerInfo?: UserInfo;

  @SpeakeasyMetadata({ data: "json, name=params" })
  params?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=schedule" })
  schedule?: string;

  @SpeakeasyMetadata({ data: "json, name=scheduleOptions" })
  scheduleOptions?: ScheduleOptions;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: TransferConfigStateEnum;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;
}
