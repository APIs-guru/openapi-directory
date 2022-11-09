import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum ManagedCertificateStatusEnum {
    ManagementStatusUnspecified = "MANAGEMENT_STATUS_UNSPECIFIED",
    Ok = "OK",
    Pending = "PENDING",
    FailedRetryingNotVisible = "FAILED_RETRYING_NOT_VISIBLE",
    FailedPermanent = "FAILED_PERMANENT",
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
