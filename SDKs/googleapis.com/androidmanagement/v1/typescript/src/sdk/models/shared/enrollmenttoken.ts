import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { User } from "./user";

export enum EnrollmentTokenAllowPersonalUsageEnum {
    AllowPersonalUsageUnspecified = "ALLOW_PERSONAL_USAGE_UNSPECIFIED"
,    PersonalUsageAllowed = "PERSONAL_USAGE_ALLOWED"
,    PersonalUsageDisallowed = "PERSONAL_USAGE_DISALLOWED"
}


// EnrollmentToken
/** 
 * An enrollment token.
**/
export class EnrollmentToken extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalData" })
  additionalData?: string;

  @Metadata({ data: "json, name=allowPersonalUsage" })
  allowPersonalUsage?: EnrollmentTokenAllowPersonalUsageEnum;

  @Metadata({ data: "json, name=duration" })
  duration?: string;

  @Metadata({ data: "json, name=expirationTimestamp" })
  expirationTimestamp?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=oneTimeOnly" })
  oneTimeOnly?: boolean;

  @Metadata({ data: "json, name=policyName" })
  policyName?: string;

  @Metadata({ data: "json, name=qrCode" })
  qrCode?: string;

  @Metadata({ data: "json, name=user" })
  user?: User;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
