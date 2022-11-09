import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GeneratePdfPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=template_id" })
  templateId: string;
}

export enum GeneratePdfSubmissionDataCreateSubmissionDataRequestDataAuthSecondFactorTypeEnum {
    None = "none"
,    PhoneNumber = "phone_number"
,    Totp = "totp"
,    MobilePush = "mobile_push"
,    SecurityKey = "security_key"
,    Fingerprint = "fingerprint"
}

export enum GeneratePdfSubmissionDataCreateSubmissionDataRequestDataAuthTypeEnum {
    None = "none"
,    Password = "password"
,    Oauth = "oauth"
,    EmailLink = "email_link"
,    PhoneNumber = "phone_number"
,    Ldap = "ldap"
,    Saml = "saml"
}


export class GeneratePdfSubmissionDataCreateSubmissionDataRequestData extends SpeakeasyBase {
  @Metadata({ data: "json, name=auth_phone_number_hash" })
  authPhoneNumberHash?: string;

  @Metadata({ data: "json, name=auth_provider" })
  authProvider?: string;

  @Metadata({ data: "json, name=auth_second_factor_type" })
  authSecondFactorType?: GeneratePdfSubmissionDataCreateSubmissionDataRequestDataAuthSecondFactorTypeEnum;

  @Metadata({ data: "json, name=auth_session_id_hash" })
  authSessionIdHash?: string;

  @Metadata({ data: "json, name=auth_session_started_at" })
  authSessionStartedAt?: string;

  @Metadata({ data: "json, name=auth_type" })
  authType: GeneratePdfSubmissionDataCreateSubmissionDataRequestDataAuthTypeEnum;

  @Metadata({ data: "json, name=auth_user_id_hash" })
  authUserIdHash?: string;

  @Metadata({ data: "json, name=auth_username_hash" })
  authUsernameHash?: string;

  @Metadata({ data: "json, name=email" })
  email: string;

  @Metadata({ data: "json, name=fields" })
  fields?: string[];

  @Metadata({ data: "json, name=metadata" })
  metadata?: Map<string, any>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=order" })
  order?: number;
}


export class GeneratePdfSubmissionData extends SpeakeasyBase {
  @Metadata({ data: "json, name=css" })
  css?: string;

  @Metadata({ data: "json, name=data" })
  data: Map<string, any>;

  @Metadata({ data: "json, name=data_requests", elemType: operations.GeneratePdfSubmissionDataCreateSubmissionDataRequestData })
  dataRequests?: GeneratePdfSubmissionDataCreateSubmissionDataRequestData[];

  @Metadata({ data: "json, name=field_overrides" })
  fieldOverrides?: Map<string, any>;

  @Metadata({ data: "json, name=html" })
  html?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: Map<string, any>;

  @Metadata({ data: "json, name=test" })
  test?: boolean;
}


export class GeneratePdfSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiTokenBasic: shared.SchemeApiTokenBasic;
}


export class GeneratePdfRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GeneratePdfPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: GeneratePdfSubmissionData;

  @Metadata()
  security: GeneratePdfSecurity;
}

export enum GeneratePdfCreateSubmissionResponseStatusEnum {
    Success = "success"
,    Error = "error"
}


export class GeneratePdfCreateSubmissionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors" })
  errors?: string[];

  @Metadata({ data: "json, name=status" })
  status: GeneratePdfCreateSubmissionResponseStatusEnum;

  @Metadata({ data: "json, name=submission" })
  submission: shared.Submission;
}


export class GeneratePdfResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  authenticationError?: shared.AuthenticationError;

  @Metadata()
  createSubmissionResponse?: GeneratePdfCreateSubmissionResponse;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  invalidRequest?: shared.InvalidRequest;
}
