import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ManagedCertificateStatusEnum {
    UnspecifiedStatus = "UNSPECIFIED_STATUS"
,    Ok = "OK"
,    Pending = "PENDING"
,    FailedRetryingInternal = "FAILED_RETRYING_INTERNAL"
,    FailedRetryingNotVisible = "FAILED_RETRYING_NOT_VISIBLE"
,    FailedPermanentlyNotVisible = "FAILED_PERMANENTLY_NOT_VISIBLE"
,    FailedRetryingCaaForbidden = "FAILED_RETRYING_CAA_FORBIDDEN"
,    FailedRetryingCaaChecking = "FAILED_RETRYING_CAA_CHECKING"
}


// ManagedCertificate
/** 
 * A certificate managed by App Engine.
**/
export class ManagedCertificate extends SpeakeasyBase {
  @Metadata({ data: "json, name=lastRenewalTime" })
  lastRenewalTime?: string;

  @Metadata({ data: "json, name=status" })
  status?: ManagedCertificateStatusEnum;
}
