import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HandshakeResource } from "./handshakeresource";
import { HandshakeResourceTypeEnum } from "./handshakeresourcetypeenum";


// HandshakeResource
/** 
 * Contains additional data that is needed to process a handshake.
**/
export class HandshakeResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=Resources", elemType: shared.HandshakeResource })
  resources?: HandshakeResource[];

  @Metadata({ data: "json, name=Type" })
  type?: HandshakeResourceTypeEnum;

  @Metadata({ data: "json, name=Value" })
  value?: string;
}
