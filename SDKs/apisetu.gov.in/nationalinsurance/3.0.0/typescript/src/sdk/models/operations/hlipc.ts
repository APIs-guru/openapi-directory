import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class HlipcRequestBodyCertificateParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=customer_Id" })
  customerId: string;

  @Metadata({ data: "json, name=policy_Number" })
  policyNumber: string;

  @Metadata({ data: "json, name=policy_StartDate" })
  policyStartDate: string;
}

export enum HlipcRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class HlipcRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateParameters" })
  certificateParameters?: HlipcRequestBodyCertificateParameters;

  @Metadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @Metadata({ data: "json, name=format" })
  format: HlipcRequestBodyFormatEnum;

  @Metadata({ data: "json, name=txnId" })
  txnId: string;
}


export class HlipcSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class HlipcRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: HlipcRequestBody;

  @Metadata()
  security: HlipcSecurity;
}

export enum Hlipc400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter"
,    InvalidParameter = "invalid_parameter"
,    InvalidFormat = "invalid_format"
,    InvalidTxnid = "invalid_txnid"
,    InvalidConsentid = "invalid_consentid"
}

export enum Hlipc400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters"
,    BadRequest = "Bad request"
,    TheFormatParameterIsInvalid = "The format parameter is invalid"
,    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format"
,    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Hlipc400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Hlipc400ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Hlipc400ApplicationJsonErrorDescriptionEnum;
}

export enum Hlipc401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication"
,    InvalidAuthorization = "invalid_authorization"
}

export enum Hlipc401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed"
,    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Hlipc401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Hlipc401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Hlipc401ApplicationJsonErrorDescriptionEnum;
}

export enum Hlipc404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found"
,    UrlNotFound = "url_not_found"
}

export enum Hlipc404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found"
,    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Hlipc404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Hlipc404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Hlipc404ApplicationJsonErrorDescriptionEnum;
}

export enum Hlipc500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Hlipc500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Hlipc500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Hlipc500ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Hlipc500ApplicationJsonErrorDescriptionEnum;
}

export enum Hlipc502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Hlipc502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Hlipc502ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Hlipc502ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Hlipc502ApplicationJsonErrorDescriptionEnum;
}

export enum Hlipc503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Hlipc503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Hlipc503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Hlipc503ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Hlipc503ApplicationJsonErrorDescriptionEnum;
}

export enum Hlipc504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Hlipc504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Hlipc504ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Hlipc504ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Hlipc504ApplicationJsonErrorDescriptionEnum;
}


export class HlipcResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  hlipc400ApplicationJsonObject?: Hlipc400ApplicationJson;

  @Metadata()
  hlipc401ApplicationJsonObject?: Hlipc401ApplicationJson;

  @Metadata()
  hlipc404ApplicationJsonObject?: Hlipc404ApplicationJson;

  @Metadata()
  hlipc500ApplicationJsonObject?: Hlipc500ApplicationJson;

  @Metadata()
  hlipc502ApplicationJsonObject?: Hlipc502ApplicationJson;

  @Metadata()
  hlipc503ApplicationJsonObject?: Hlipc503ApplicationJson;

  @Metadata()
  hlipc504ApplicationJsonObject?: Hlipc504ApplicationJson;
}
