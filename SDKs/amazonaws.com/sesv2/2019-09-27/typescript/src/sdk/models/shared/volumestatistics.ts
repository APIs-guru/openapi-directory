import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VolumeStatistics
/** 
 * An object that contains information about the amount of email that was delivered to recipients.
**/
export class VolumeStatistics extends SpeakeasyBase {
  @Metadata({ data: "json, name=InboxRawCount" })
  inboxRawCount?: number;

  @Metadata({ data: "json, name=ProjectedInbox" })
  projectedInbox?: number;

  @Metadata({ data: "json, name=ProjectedSpam" })
  projectedSpam?: number;

  @Metadata({ data: "json, name=SpamRawCount" })
  spamRawCount?: number;
}
