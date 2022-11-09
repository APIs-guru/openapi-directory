import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AttachmentHashTypeEnum } from "./attachmenthashtypeenum";


// AttachmentContent
/** 
 * A structure that includes attributes that describe a document attachment.
**/
export class AttachmentContent extends SpeakeasyBase {
  @Metadata({ data: "json, name=Hash" })
  hash?: string;

  @Metadata({ data: "json, name=HashType" })
  hashType?: AttachmentHashTypeEnum;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Size" })
  size?: number;

  @Metadata({ data: "json, name=Url" })
  url?: string;
}
