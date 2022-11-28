import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionTypeEnum } from "./actiontypeenum";



// HandshakeFilter
/** 
 * Specifies the criteria that are used to select the handshakes for the operation.
**/
export class HandshakeFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ActionType" })
  actionType?: ActionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ParentHandshakeId" })
  parentHandshakeId?: string;
}
