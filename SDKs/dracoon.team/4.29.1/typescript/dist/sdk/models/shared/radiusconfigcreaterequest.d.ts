import { SpeakeasyBase } from "../../../internal/utils";
import { FailoverServer } from "./failoverserver";
/**
 * Request model for creating a RADIUS configuration
**/
export declare class RadiusConfigCreateRequest extends SpeakeasyBase {
    failoverServer?: FailoverServer;
    ipAddress: string;
    otpPinFirst?: boolean;
    port: number;
    sharedSecret: string;
}
