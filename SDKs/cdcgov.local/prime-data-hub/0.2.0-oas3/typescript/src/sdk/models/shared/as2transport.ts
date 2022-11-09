import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// As2Transport
/** 
 * Describes a single AS2 connection in all of it variations
**/
export class As2Transport extends SpeakeasyBase {
  @Metadata({ data: "json, name=contentDescription" })
  contentDescription?: string;

  @Metadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @Metadata({ data: "json, name=receiverId" })
  receiverId: string;

  @Metadata({ data: "json, name=receiverUrl" })
  receiverUrl: string;

  @Metadata({ data: "json, name=senderEmail" })
  senderEmail?: string;

  @Metadata({ data: "json, name=senderId" })
  senderId: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}
