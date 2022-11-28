import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CampaignEmailMessage
/** 
 * Specifies the content and "From" address for an email message that's sent to recipients of a campaign.
**/
export class CampaignEmailMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=FromAddress" })
  fromAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=HtmlBody" })
  htmlBody?: string;

  @SpeakeasyMetadata({ data: "json, name=Title" })
  title?: string;
}
