import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ManagedCertificateStatusEnum {
    ManagementStatusUnspecified = "MANAGEMENT_STATUS_UNSPECIFIED"
,    Ok = "OK"
,    Pending = "PENDING"
,    FailedRetryingNotVisible = "FAILED_RETRYING_NOT_VISIBLE"
,    FailedPermanent = "FAILED_PERMANENT"
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
