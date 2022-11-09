import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EmailPreferences } from "./emailpreferences";
import { Status } from "./status";

export enum TransferRunStateEnum {
    TransferStateUnspecified = "TRANSFER_STATE_UNSPECIFIED"
,    Pending = "PENDING"
,    Running = "RUNNING"
,    Succeeded = "SUCCEEDED"
,    Failed = "FAILED"
,    Cancelled = "CANCELLED"
}


// TransferRun
/** 
 * Represents a data transfer run.
**/
export class TransferRun extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataSourceId" })
  dataSourceId?: string;

  @Metadata({ data: "json, name=destinationDatasetId" })
  destinationDatasetId?: string;

  @Metadata({ data: "json, name=emailPreferences" })
  emailPreferences?: EmailPreferences;

  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=errorStatus" })
  errorStatus?: Status;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=notificationPubsubTopic" })
  notificationPubsubTopic?: string;

  @Metadata({ data: "json, name=params" })
  params?: Map<string, any>;

  @Metadata({ data: "json, name=runTime" })
  runTime?: string;

  @Metadata({ data: "json, name=schedule" })
  schedule?: string;

  @Metadata({ data: "json, name=scheduleTime" })
  scheduleTime?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;

  @Metadata({ data: "json, name=state" })
  state?: TransferRunStateEnum;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=userId" })
  userId?: string;
}
