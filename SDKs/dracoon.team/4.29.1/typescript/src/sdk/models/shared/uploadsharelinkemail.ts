import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UploadShareLinkEmail
/** 
 * Request model for sending an email of an Upload Share link
**/
export class UploadShareLinkEmail extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body: string;

  @Metadata({ data: "json, name=receiverLanguage" })
  receiverLanguage?: string;

  @Metadata({ data: "json, name=recipients" })
  recipients: string[];
}
