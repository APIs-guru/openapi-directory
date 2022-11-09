import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ActionTypeEnum } from "./actiontypeenum";


// HandshakeFilter
/** 
 * Specifies the criteria that are used to select the handshakes for the operation.
**/
export class HandshakeFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=ActionType" })
  actionType?: ActionTypeEnum;

  @Metadata({ data: "json, name=ParentHandshakeId" })
  parentHandshakeId?: string;
}
