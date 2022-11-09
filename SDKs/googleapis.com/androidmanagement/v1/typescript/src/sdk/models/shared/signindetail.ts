import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SigninDetailAllowPersonalUsageEnum {
    AllowPersonalUsageUnspecified = "ALLOW_PERSONAL_USAGE_UNSPECIFIED"
,    PersonalUsageAllowed = "PERSONAL_USAGE_ALLOWED"
,    PersonalUsageDisallowed = "PERSONAL_USAGE_DISALLOWED"
}


// SigninDetail
/** 
 * A resource containing sign in details for an enterprise.
**/
export class SigninDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowPersonalUsage" })
  allowPersonalUsage?: SigninDetailAllowPersonalUsageEnum;

  @Metadata({ data: "json, name=qrCode" })
  qrCode?: string;

  @Metadata({ data: "json, name=signinEnrollmentToken" })
  signinEnrollmentToken?: string;

  @Metadata({ data: "json, name=signinUrl" })
  signinUrl?: string;
}
