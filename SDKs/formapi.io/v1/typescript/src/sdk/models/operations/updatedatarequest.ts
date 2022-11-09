import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateDataRequestPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=data_request_id" })
  dataRequestId: string;
}

export enum UpdateDataRequestUpdateSubmissionDataRequestDataAuthSecondFactorTypeEnum {
    None = "none"
,    PhoneNumber = "phone_number"
,    Totp = "totp"
,    MobilePush = "mobile_push"
,    SecurityKey = "security_key"
,    Fingerprint = "fingerprint"
}

export enum UpdateDataRequestUpdateSubmissionDataRequestDataAuthTypeEnum {
    None = "none"
,    Password = "password"
,    Oauth = "oauth"
,    EmailLink = "email_link"
,    PhoneNumber = "phone_number"
,    Ldap = "ldap"
,    Saml = "saml"
}


export class UpdateDataRequestUpdateSubmissionDataRequestData extends SpeakeasyBase {
  @Metadata({ data: "json, name=auth_phone_number_hash" })
  authPhoneNumberHash?: string;

  @Metadata({ data: "json, name=auth_provider" })
  authProvider?: string;

  @Metadata({ data: "json, name=auth_second_factor_type" })
  authSecondFactorType?: UpdateDataRequestUpdateSubmissionDataRequestDataAuthSecondFactorTypeEnum;

  @Metadata({ data: "json, name=auth_session_id_hash" })
  authSessionIdHash?: string;

  @Metadata({ data: "json, name=auth_session_started_at" })
  authSessionStartedAt?: string;

  @Metadata({ data: "json, name=auth_type" })
  authType?: UpdateDataRequestUpdateSubmissionDataRequestDataAuthTypeEnum;

  @Metadata({ data: "json, name=auth_user_id_hash" })
  authUserIdHash?: string;

  @Metadata({ data: "json, name=auth_username_hash" })
  authUsernameHash?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=fields" })
  fields?: string[];

  @Metadata({ data: "json, name=metadata" })
  metadata?: Map<string, any>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=order" })
  order?: number;
}


export class UpdateDataRequestSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiTokenBasic: shared.SchemeApiTokenBasic;
}


export class UpdateDataRequestRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateDataRequestPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateDataRequestUpdateSubmissionDataRequestData;

  @Metadata()
  security: UpdateDataRequestSecurity;
}

export enum UpdateDataRequestUpdateDataRequestResponseStatusEnum {
    Success = "success"
,    Error = "error"
}


export class UpdateDataRequestUpdateDataRequestResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data_request" })
  dataRequest: shared.SubmissionDataRequest;

  @Metadata({ data: "json, name=errors" })
  errors?: string[];

  @Metadata({ data: "json, name=status" })
  status: UpdateDataRequestUpdateDataRequestResponseStatusEnum;
}


export class UpdateDataRequestResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  authenticationError?: shared.AuthenticationError;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  invalidRequest?: shared.InvalidRequest;

  @Metadata()
  updateDataRequestResponse?: UpdateDataRequestUpdateDataRequestResponse;
}
