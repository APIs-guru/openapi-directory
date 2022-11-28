import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateDataRequestPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=data_request_id" })
  dataRequestId: string;
}

export enum UpdateDataRequestUpdateSubmissionDataRequestDataAuthSecondFactorTypeEnum {
    None = "none",
    PhoneNumber = "phone_number",
    Totp = "totp",
    MobilePush = "mobile_push",
    SecurityKey = "security_key",
    Fingerprint = "fingerprint"
}

export enum UpdateDataRequestUpdateSubmissionDataRequestDataAuthTypeEnum {
    None = "none",
    Password = "password",
    Oauth = "oauth",
    EmailLink = "email_link",
    PhoneNumber = "phone_number",
    Ldap = "ldap",
    Saml = "saml"
}


export class UpdateDataRequestUpdateSubmissionDataRequestData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=auth_phone_number_hash" })
  authPhoneNumberHash?: string;

  @SpeakeasyMetadata({ data: "json, name=auth_provider" })
  authProvider?: string;

  @SpeakeasyMetadata({ data: "json, name=auth_second_factor_type" })
  authSecondFactorType?: UpdateDataRequestUpdateSubmissionDataRequestDataAuthSecondFactorTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=auth_session_id_hash" })
  authSessionIdHash?: string;

  @SpeakeasyMetadata({ data: "json, name=auth_session_started_at" })
  authSessionStartedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=auth_type" })
  authType?: UpdateDataRequestUpdateSubmissionDataRequestDataAuthTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=auth_user_id_hash" })
  authUserIdHash?: string;

  @SpeakeasyMetadata({ data: "json, name=auth_username_hash" })
  authUsernameHash?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields?: string[];

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=order" })
  order?: number;
}


export class UpdateDataRequestSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiTokenBasic: shared.SchemeApiTokenBasic;
}

export enum UpdateDataRequestUpdateDataRequestResponseStatusEnum {
    Success = "success",
    Error = "error"
}


export class UpdateDataRequestUpdateDataRequestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data_request" })
  dataRequest: shared.SubmissionDataRequest;

  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: string[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: UpdateDataRequestUpdateDataRequestResponseStatusEnum;
}


export class UpdateDataRequestRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateDataRequestPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateDataRequestUpdateSubmissionDataRequestData;

  @SpeakeasyMetadata()
  security: UpdateDataRequestSecurity;
}


export class UpdateDataRequestResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  authenticationError?: shared.AuthenticationError;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  invalidRequest?: shared.InvalidRequest;

  @SpeakeasyMetadata()
  updateDataRequestResponse?: UpdateDataRequestUpdateDataRequestResponse;
}
