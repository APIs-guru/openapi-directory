import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DownloadShareLinkEmail
/** 
 * Request model for sending an email of a Download Share link
**/
export class DownloadShareLinkEmail extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body: string;

  @Metadata({ data: "json, name=receiverLanguage" })
  receiverLanguage?: string;

  @Metadata({ data: "json, name=recipients" })
  recipients: string[];
}
