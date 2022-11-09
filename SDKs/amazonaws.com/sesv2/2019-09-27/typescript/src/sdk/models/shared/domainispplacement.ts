import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DomainIspPlacement
/** 
 * An object that contains inbox placement data for email sent from one of your email domains to a specific email provider.
**/
export class DomainIspPlacement extends SpeakeasyBase {
  @Metadata({ data: "json, name=InboxPercentage" })
  inboxPercentage?: number;

  @Metadata({ data: "json, name=InboxRawCount" })
  inboxRawCount?: number;

  @Metadata({ data: "json, name=IspName" })
  ispName?: string;

  @Metadata({ data: "json, name=SpamPercentage" })
  spamPercentage?: number;

  @Metadata({ data: "json, name=SpamRawCount" })
  spamRawCount?: number;
}
