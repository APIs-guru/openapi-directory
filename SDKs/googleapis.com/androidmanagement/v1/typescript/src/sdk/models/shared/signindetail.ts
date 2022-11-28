import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SigninDetailAllowPersonalUsageEnum {
    AllowPersonalUsageUnspecified = "ALLOW_PERSONAL_USAGE_UNSPECIFIED",
    PersonalUsageAllowed = "PERSONAL_USAGE_ALLOWED",
    PersonalUsageDisallowed = "PERSONAL_USAGE_DISALLOWED"
}


// SigninDetail
/** 
 * A resource containing sign in details for an enterprise.
**/
export class SigninDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowPersonalUsage" })
  allowPersonalUsage?: SigninDetailAllowPersonalUsageEnum;

  @SpeakeasyMetadata({ data: "json, name=qrCode" })
  qrCode?: string;

  @SpeakeasyMetadata({ data: "json, name=signinEnrollmentToken" })
  signinEnrollmentToken?: string;

  @SpeakeasyMetadata({ data: "json, name=signinUrl" })
  signinUrl?: string;
}
