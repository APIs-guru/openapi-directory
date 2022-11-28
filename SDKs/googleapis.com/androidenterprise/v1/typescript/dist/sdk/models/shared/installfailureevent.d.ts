import { SpeakeasyBase } from "../../../internal/utils";
export declare enum InstallFailureEventFailureReasonEnum {
    Unknown = "unknown",
    Timeout = "timeout"
}
/**
 * An event generated when an app installation failed on a device
**/
export declare class InstallFailureEvent extends SpeakeasyBase {
    deviceId?: string;
    failureDetails?: string;
    failureReason?: InstallFailureEventFailureReasonEnum;
    productId?: string;
    userId?: string;
}
