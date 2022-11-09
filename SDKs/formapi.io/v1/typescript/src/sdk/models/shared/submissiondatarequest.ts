import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SubmissionDataRequestAuthSecondFactorTypeEnum {
    None = "none"
,    PhoneNumber = "phone_number"
,    Totp = "totp"
,    MobilePush = "mobile_push"
,    SecurityKey = "security_key"
,    Fingerprint = "fingerprint"
}

export enum SubmissionDataRequestAuthTypeEnum {
    None = "none"
,    Password = "password"
,    Oauth = "oauth"
,    EmailLink = "email_link"
,    PhoneNumber = "phone_number"
,    Ldap = "ldap"
,    Saml = "saml"
}

export enum SubmissionDataRequestStateEnum {
    Pending = "pending"
,    Completed = "completed"
}


export class SubmissionDataRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=auth_phone_number_hash" })
  authPhoneNumberHash?: string;

  @Metadata({ data: "json, name=auth_provider" })
  authProvider?: string;

  @Metadata({ data: "json, name=auth_second_factor_type" })
  authSecondFactorType?: SubmissionDataRequestAuthSecondFactorTypeEnum;

  @Metadata({ data: "json, name=auth_session_id_hash" })
  authSessionIdHash?: string;

  @Metadata({ data: "json, name=auth_session_started_at" })
  authSessionStartedAt?: string;

  @Metadata({ data: "json, name=auth_type" })
  authType?: SubmissionDataRequestAuthTypeEnum;

  @Metadata({ data: "json, name=auth_user_id_hash" })
  authUserIdHash?: string;

  @Metadata({ data: "json, name=auth_username_hash" })
  authUsernameHash?: string;

  @Metadata({ data: "json, name=completed_at" })
  completedAt?: string;

  @Metadata({ data: "json, name=email" })
  email: string;

  @Metadata({ data: "json, name=fields" })
  fields: string[];

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=ip_address" })
  ipAddress?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata: Map<string, any>;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=order" })
  order: number;

  @Metadata({ data: "json, name=sort_order" })
  sortOrder: number;

  @Metadata({ data: "json, name=state" })
  state: SubmissionDataRequestStateEnum;

  @Metadata({ data: "json, name=user_agent" })
  userAgent?: string;

  @Metadata({ data: "json, name=viewed_at" })
  viewedAt?: string;
}
