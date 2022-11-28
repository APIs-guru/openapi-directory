import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DomainIspPlacement
/** 
 * An object that contains inbox placement data for email sent from one of your email domains to a specific email provider.
**/
export class DomainIspPlacement extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InboxPercentage" })
  inboxPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=InboxRawCount" })
  inboxRawCount?: number;

  @SpeakeasyMetadata({ data: "json, name=IspName" })
  ispName?: string;

  @SpeakeasyMetadata({ data: "json, name=SpamPercentage" })
  spamPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=SpamRawCount" })
  spamRawCount?: number;
}
