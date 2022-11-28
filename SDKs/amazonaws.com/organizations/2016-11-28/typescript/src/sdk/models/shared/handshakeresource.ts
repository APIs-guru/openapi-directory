import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HandshakeResourceTypeEnum } from "./handshakeresourcetypeenum";



// HandshakeResource
/** 
 * Contains additional data that is needed to process a handshake.
**/
export class HandshakeResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Resources", elemType: HandshakeResource })
  resources?: HandshakeResource[];

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: HandshakeResourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}
