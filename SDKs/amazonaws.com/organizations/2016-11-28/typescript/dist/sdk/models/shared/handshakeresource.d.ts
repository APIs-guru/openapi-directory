import { SpeakeasyBase } from "../../../internal/utils";
import { HandshakeResourceTypeEnum } from "./handshakeresourcetypeenum";
/**
 * Contains additional data that is needed to process a handshake.
**/
export declare class HandshakeResource extends SpeakeasyBase {
    resources?: HandshakeResource[];
    type?: HandshakeResourceTypeEnum;
    value?: string;
}
