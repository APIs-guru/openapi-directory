import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttachmentHashTypeEnum } from "./attachmenthashtypeenum";



// AttachmentContent
/** 
 * A structure that includes attributes that describe a document attachment.
**/
export class AttachmentContent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Hash" })
  hash?: string;

  @SpeakeasyMetadata({ data: "json, name=HashType" })
  hashType?: AttachmentHashTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=Url" })
  url?: string;
}
