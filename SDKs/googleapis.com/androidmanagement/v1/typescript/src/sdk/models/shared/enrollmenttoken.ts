import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";


export enum EnrollmentTokenAllowPersonalUsageEnum {
    AllowPersonalUsageUnspecified = "ALLOW_PERSONAL_USAGE_UNSPECIFIED",
    PersonalUsageAllowed = "PERSONAL_USAGE_ALLOWED",
    PersonalUsageDisallowed = "PERSONAL_USAGE_DISALLOWED"
}


// EnrollmentToken
/** 
 * An enrollment token.
**/
export class EnrollmentToken extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalData" })
  additionalData?: string;

  @SpeakeasyMetadata({ data: "json, name=allowPersonalUsage" })
  allowPersonalUsage?: EnrollmentTokenAllowPersonalUsageEnum;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: string;

  @SpeakeasyMetadata({ data: "json, name=expirationTimestamp" })
  expirationTimestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=oneTimeOnly" })
  oneTimeOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=policyName" })
  policyName?: string;

  @SpeakeasyMetadata({ data: "json, name=qrCode" })
  qrCode?: string;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: User;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
