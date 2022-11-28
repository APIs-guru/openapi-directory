import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EmailPreferences } from "./emailpreferences";
import { Status } from "./status";


export enum TransferRunStateEnum {
    TransferStateUnspecified = "TRANSFER_STATE_UNSPECIFIED",
    Pending = "PENDING",
    Running = "RUNNING",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Cancelled = "CANCELLED"
}


// TransferRun
/** 
 * Represents a data transfer run.
**/
export class TransferRun extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataSourceId" })
  dataSourceId?: string;

  @SpeakeasyMetadata({ data: "json, name=destinationDatasetId" })
  destinationDatasetId?: string;

  @SpeakeasyMetadata({ data: "json, name=emailPreferences" })
  emailPreferences?: EmailPreferences;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=errorStatus" })
  errorStatus?: Status;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notificationPubsubTopic" })
  notificationPubsubTopic?: string;

  @SpeakeasyMetadata({ data: "json, name=params" })
  params?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=runTime" })
  runTime?: string;

  @SpeakeasyMetadata({ data: "json, name=schedule" })
  schedule?: string;

  @SpeakeasyMetadata({ data: "json, name=scheduleTime" })
  scheduleTime?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: TransferRunStateEnum;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;
}
