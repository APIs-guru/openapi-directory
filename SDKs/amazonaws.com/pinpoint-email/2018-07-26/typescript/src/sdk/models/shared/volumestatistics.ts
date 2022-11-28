import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VolumeStatistics
/** 
 * An object that contains information about the amount of email that was delivered to recipients.
**/
export class VolumeStatistics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InboxRawCount" })
  inboxRawCount?: number;

  @SpeakeasyMetadata({ data: "json, name=ProjectedInbox" })
  projectedInbox?: number;

  @SpeakeasyMetadata({ data: "json, name=ProjectedSpam" })
  projectedSpam?: number;

  @SpeakeasyMetadata({ data: "json, name=SpamRawCount" })
  spamRawCount?: number;
}
