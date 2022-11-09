import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CampaignEmailMessage
/** 
 * Specifies the content and "From" address for an email message that's sent to recipients of a campaign.
**/
export class CampaignEmailMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=Body" })
  body?: string;

  @Metadata({ data: "json, name=FromAddress" })
  fromAddress?: string;

  @Metadata({ data: "json, name=HtmlBody" })
  htmlBody?: string;

  @Metadata({ data: "json, name=Title" })
  title?: string;
}
