import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ManagedCertificateStatusEnum {
    UnspecifiedStatus = "UNSPECIFIED_STATUS",
    Ok = "OK",
    Pending = "PENDING",
    FailedRetryingInternal = "FAILED_RETRYING_INTERNAL",
    FailedRetryingNotVisible = "FAILED_RETRYING_NOT_VISIBLE",
    FailedPermanentlyNotVisible = "FAILED_PERMANENTLY_NOT_VISIBLE",
    FailedRetryingCaaForbidden = "FAILED_RETRYING_CAA_FORBIDDEN",
    FailedRetryingCaaChecking = "FAILED_RETRYING_CAA_CHECKING"
}
/**
 * A certificate managed by App Engine.
**/
export declare class ManagedCertificate extends SpeakeasyBase {
    lastRenewalTime?: string;
    status?: ManagedCertificateStatusEnum;
}
