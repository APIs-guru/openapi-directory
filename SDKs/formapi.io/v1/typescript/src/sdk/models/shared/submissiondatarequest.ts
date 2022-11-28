import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SubmissionDataRequestAuthSecondFactorTypeEnum {
    None = "none",
    PhoneNumber = "phone_number",
    Totp = "totp",
    MobilePush = "mobile_push",
    SecurityKey = "security_key",
    Fingerprint = "fingerprint"
}

export enum SubmissionDataRequestAuthTypeEnum {
    None = "none",
    Password = "password",
    Oauth = "oauth",
    EmailLink = "email_link",
    PhoneNumber = "phone_number",
    Ldap = "ldap",
    Saml = "saml"
}

export enum SubmissionDataRequestStateEnum {
    Pending = "pending",
    Completed = "completed"
}


export class SubmissionDataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auth_phone_number_hash" })
  authPhoneNumberHash?: string;

  @SpeakeasyMetadata({ data: "json, name=auth_provider" })
  authProvider?: string;

  @SpeakeasyMetadata({ data: "json, name=auth_second_factor_type" })
  authSecondFactorType?: SubmissionDataRequestAuthSecondFactorTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=auth_session_id_hash" })
  authSessionIdHash?: string;

  @SpeakeasyMetadata({ data: "json, name=auth_session_started_at" })
  authSessionStartedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=auth_type" })
  authType?: SubmissionDataRequestAuthTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=auth_user_id_hash" })
  authUserIdHash?: string;

  @SpeakeasyMetadata({ data: "json, name=auth_username_hash" })
  authUsernameHash?: string;

  @SpeakeasyMetadata({ data: "json, name=completed_at" })
  completedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields: string[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=ip_address" })
  ipAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=order" })
  order: number;

  @SpeakeasyMetadata({ data: "json, name=sort_order" })
  sortOrder: number;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: SubmissionDataRequestStateEnum;

  @SpeakeasyMetadata({ data: "json, name=user_agent" })
  userAgent?: string;

  @SpeakeasyMetadata({ data: "json, name=viewed_at" })
  viewedAt?: string;
}
