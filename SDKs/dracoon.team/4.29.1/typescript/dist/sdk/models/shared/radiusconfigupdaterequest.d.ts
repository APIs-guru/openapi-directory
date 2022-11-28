import { SpeakeasyBase } from "../../../internal/utils";
import { FailoverServer } from "./failoverserver";
/**
 * Request model for updating a RADIUS configuration
**/
export declare class RadiusConfigUpdateRequest extends SpeakeasyBase {
    failoverServer?: FailoverServer;
    ipAddress?: string;
    otpPinFirst?: boolean;
    port?: number;
    sharedSecret?: string;
}
