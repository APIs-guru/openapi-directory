import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SendQuota
/** 
 * An object that contains information about the per-day and per-second sending limits for your Amazon Pinpoint account in the current AWS Region.
**/
export class SendQuota extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Max24HourSend" })
  max24HourSend?: number;

  @SpeakeasyMetadata({ data: "json, name=MaxSendRate" })
  maxSendRate?: number;

  @SpeakeasyMetadata({ data: "json, name=SentLast24Hours" })
  sentLast24Hours?: number;
}
