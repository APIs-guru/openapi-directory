import { SpeakeasyBase } from "../../../internal/utils";
import { FailoverServer } from "./failoverserver";
/**
 * RADIUS configuration
**/
export declare class RadiusConfig extends SpeakeasyBase {
    failoverServer?: FailoverServer;
    ipAddress: string;
    otpPinFirst: boolean;
    port: number;
    sharedSecret: string;
}
