import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EmailPreferences } from "./emailpreferences";
import { UserInfo } from "./userinfo";
import { ScheduleOptions } from "./scheduleoptions";

export enum TransferConfigStateEnum {
    TransferStateUnspecified = "TRANSFER_STATE_UNSPECIFIED"
,    Pending = "PENDING"
,    Running = "RUNNING"
,    Succeeded = "SUCCEEDED"
,    Failed = "FAILED"
,    Cancelled = "CANCELLED"
}


// TransferConfig
/** 
 * Represents a data transfer configuration. A transfer configuration contains all metadata needed to perform a data transfer. For example, `destination_dataset_id` specifies where data should be stored. When a new transfer configuration is created, the specified `destination_dataset_id` is created when needed and shared with the appropriate data source service account.
**/
export class TransferConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataRefreshWindowDays" })
  dataRefreshWindowDays?: number;

  @Metadata({ data: "json, name=dataSourceId" })
  dataSourceId?: string;

  @Metadata({ data: "json, name=datasetRegion" })
  datasetRegion?: string;

  @Metadata({ data: "json, name=destinationDatasetId" })
  destinationDatasetId?: string;

  @Metadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=emailPreferences" })
  emailPreferences?: EmailPreferences;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=nextRunTime" })
  nextRunTime?: string;

  @Metadata({ data: "json, name=notificationPubsubTopic" })
  notificationPubsubTopic?: string;

  @Metadata({ data: "json, name=ownerInfo" })
  ownerInfo?: UserInfo;

  @Metadata({ data: "json, name=params" })
  params?: Map<string, any>;

  @Metadata({ data: "json, name=schedule" })
  schedule?: string;

  @Metadata({ data: "json, name=scheduleOptions" })
  scheduleOptions?: ScheduleOptions;

  @Metadata({ data: "json, name=state" })
  state?: TransferConfigStateEnum;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=userId" })
  userId?: string;
}
