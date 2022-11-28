import { SpeakeasyBase } from "../../../internal/utils";
import { ActionTypeEnum } from "./actiontypeenum";
/**
 * Specifies the criteria that are used to select the handshakes for the operation.
**/
export declare class HandshakeFilter extends SpeakeasyBase {
    actionType?: ActionTypeEnum;
    parentHandshakeId?: string;
}
