import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AddAttachmentsToSetResponse
/** 
 * The ID and expiry time of the attachment set returned by the <a>AddAttachmentsToSet</a> operation.
**/
export class AddAttachmentsToSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attachmentSetId" })
  attachmentSetId?: string;

  @SpeakeasyMetadata({ data: "json, name=expiryTime" })
  expiryTime?: string;
}
