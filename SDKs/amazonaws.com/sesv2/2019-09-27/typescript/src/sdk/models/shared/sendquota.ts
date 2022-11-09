import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SendQuota
/** 
 * An object that contains information about the per-day and per-second sending limits for your Amazon SES account in the current AWS Region.
**/
export class SendQuota extends SpeakeasyBase {
  @Metadata({ data: "json, name=Max24HourSend" })
  max24HourSend?: number;

  @Metadata({ data: "json, name=MaxSendRate" })
  maxSendRate?: number;

  @Metadata({ data: "json, name=SentLast24Hours" })
  sentLast24Hours?: number;
}
