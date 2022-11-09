import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class StartDeviceAuthorizationResponse extends SpeakeasyBase {
    deviceCode?: string;
    expiresIn?: number;
    interval?: number;
    userCode?: string;
    verificationUri?: string;
    verificationUriComplete?: string;
}
