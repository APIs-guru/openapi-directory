import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// As2Transport
/** 
 * Describes a single AS2 connection in all of it variations
**/
export class As2Transport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contentDescription" })
  contentDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=mimeType" })
  mimeType?: string;

  @SpeakeasyMetadata({ data: "json, name=receiverId" })
  receiverId: string;

  @SpeakeasyMetadata({ data: "json, name=receiverUrl" })
  receiverUrl: string;

  @SpeakeasyMetadata({ data: "json, name=senderEmail" })
  senderEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=senderId" })
  senderId: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
