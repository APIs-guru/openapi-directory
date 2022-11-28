import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UploadShareLinkEmail
/** 
 * Request model for sending an email of an Upload Share link
**/
export class UploadShareLinkEmail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body: string;

  @SpeakeasyMetadata({ data: "json, name=receiverLanguage" })
  receiverLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=recipients" })
  recipients: string[];
}
