import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AddAttachmentsToSetResponse
/** 
 * The ID and expiry time of the attachment set returned by the <a>AddAttachmentsToSet</a> operation.
**/
export class AddAttachmentsToSetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=attachmentSetId" })
  attachmentSetId?: string;

  @Metadata({ data: "json, name=expiryTime" })
  expiryTime?: string;
}
