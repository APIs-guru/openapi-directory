import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DownloadShareLinkEmail
/** 
 * Request model for sending an email of a Download Share link
**/
export class DownloadShareLinkEmail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body: string;

  @SpeakeasyMetadata({ data: "json, name=receiverLanguage" })
  receiverLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=recipients" })
  recipients: string[];
}
