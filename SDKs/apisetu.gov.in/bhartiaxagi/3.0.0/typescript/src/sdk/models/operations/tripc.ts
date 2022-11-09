import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class TripcRequestBodyCertificateParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=FullName" })
  fullName: string;

  @Metadata({ data: "json, name=PolicyNumber" })
  policyNumber: string;
}

export enum TripcRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class TripcRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateParameters" })
  certificateParameters?: TripcRequestBodyCertificateParameters;

  @Metadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @Metadata({ data: "json, name=format" })
  format: TripcRequestBodyFormatEnum;

  @Metadata({ data: "json, name=txnId" })
  txnId: string;
}


export class TripcSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class TripcRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: TripcRequestBody;

  @Metadata()
  security: TripcSecurity;
}

export enum Tripc400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter"
,    InvalidParameter = "invalid_parameter"
,    InvalidFormat = "invalid_format"
,    InvalidTxnid = "invalid_txnid"
,    InvalidConsentid = "invalid_consentid"
}

export enum Tripc400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters"
,    BadRequest = "Bad request"
,    TheFormatParameterIsInvalid = "The format parameter is invalid"
,    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format"
,    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Tripc400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Tripc400ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Tripc400ApplicationJsonErrorDescriptionEnum;
}

export enum Tripc401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication"
,    InvalidAuthorization = "invalid_authorization"
}

export enum Tripc401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed"
,    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Tripc401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Tripc401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Tripc401ApplicationJsonErrorDescriptionEnum;
}

export enum Tripc404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found"
,    UrlNotFound = "url_not_found"
}

export enum Tripc404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found"
,    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Tripc404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Tripc404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Tripc404ApplicationJsonErrorDescriptionEnum;
}

export enum Tripc500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Tripc500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Tripc500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Tripc500ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Tripc500ApplicationJsonErrorDescriptionEnum;
}

export enum Tripc502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Tripc502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Tripc502ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Tripc502ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Tripc502ApplicationJsonErrorDescriptionEnum;
}

export enum Tripc503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Tripc503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Tripc503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Tripc503ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Tripc503ApplicationJsonErrorDescriptionEnum;
}

export enum Tripc504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Tripc504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Tripc504ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Tripc504ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Tripc504ApplicationJsonErrorDescriptionEnum;
}


export class TripcResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  tripc400ApplicationJsonObject?: Tripc400ApplicationJson;

  @Metadata()
  tripc401ApplicationJsonObject?: Tripc401ApplicationJson;

  @Metadata()
  tripc404ApplicationJsonObject?: Tripc404ApplicationJson;

  @Metadata()
  tripc500ApplicationJsonObject?: Tripc500ApplicationJson;

  @Metadata()
  tripc502ApplicationJsonObject?: Tripc502ApplicationJson;

  @Metadata()
  tripc503ApplicationJsonObject?: Tripc503ApplicationJson;

  @Metadata()
  tripc504ApplicationJsonObject?: Tripc504ApplicationJson;
}
