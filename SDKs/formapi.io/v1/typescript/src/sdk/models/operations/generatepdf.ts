import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GeneratePdfPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=template_id" })
  templateId: string;
}

export enum GeneratePdfSubmissionDataCreateSubmissionDataRequestDataAuthSecondFactorTypeEnum {
    None = "none",
    PhoneNumber = "phone_number",
    Totp = "totp",
    MobilePush = "mobile_push",
    SecurityKey = "security_key",
    Fingerprint = "fingerprint"
}

export enum GeneratePdfSubmissionDataCreateSubmissionDataRequestDataAuthTypeEnum {
    None = "none",
    Password = "password",
    Oauth = "oauth",
    EmailLink = "email_link",
    PhoneNumber = "phone_number",
    Ldap = "ldap",
    Saml = "saml"
}


export class GeneratePdfSubmissionDataCreateSubmissionDataRequestData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auth_phone_number_hash" })
  authPhoneNumberHash?: string;

  @SpeakeasyMetadata({ data: "json, name=auth_provider" })
  authProvider?: string;

  @SpeakeasyMetadata({ data: "json, name=auth_second_factor_type" })
  authSecondFactorType?: GeneratePdfSubmissionDataCreateSubmissionDataRequestDataAuthSecondFactorTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=auth_session_id_hash" })
  authSessionIdHash?: string;

  @SpeakeasyMetadata({ data: "json, name=auth_session_started_at" })
  authSessionStartedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=auth_type" })
  authType: GeneratePdfSubmissionDataCreateSubmissionDataRequestDataAuthTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=auth_user_id_hash" })
  authUserIdHash?: string;

  @SpeakeasyMetadata({ data: "json, name=auth_username_hash" })
  authUsernameHash?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields?: string[];

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=order" })
  order?: number;
}


export class GeneratePdfSubmissionData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=css" })
  css?: string;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=data_requests", elemType: GeneratePdfSubmissionDataCreateSubmissionDataRequestData })
  dataRequests?: GeneratePdfSubmissionDataCreateSubmissionDataRequestData[];

  @SpeakeasyMetadata({ data: "json, name=field_overrides" })
  fieldOverrides?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=html" })
  html?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=test" })
  test?: boolean;
}


export class GeneratePdfSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiTokenBasic: shared.SchemeApiTokenBasic;
}

export enum GeneratePdfCreateSubmissionResponseStatusEnum {
    Success = "success",
    Error = "error"
}


export class GeneratePdfCreateSubmissionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: string[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: GeneratePdfCreateSubmissionResponseStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=submission" })
  submission: shared.Submission;
}


export class GeneratePdfRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GeneratePdfPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: GeneratePdfSubmissionData;

  @SpeakeasyMetadata()
  security: GeneratePdfSecurity;
}


export class GeneratePdfResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  authenticationError?: shared.AuthenticationError;

  @SpeakeasyMetadata()
  createSubmissionResponse?: GeneratePdfCreateSubmissionResponse;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  invalidRequest?: shared.InvalidRequest;
}
