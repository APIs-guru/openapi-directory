import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class NooclRequestBodyCertificateParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=RefNo" })
  refNo: string;

  @Metadata({ data: "json, name=TokenNo" })
  tokenNo: string;
}

export enum NooclRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class NooclRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateParameters" })
  certificateParameters?: NooclRequestBodyCertificateParameters;

  @Metadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @Metadata({ data: "json, name=format" })
  format: NooclRequestBodyFormatEnum;

  @Metadata({ data: "json, name=txnId" })
  txnId: string;
}


export class NooclSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class NooclRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: NooclRequestBody;

  @Metadata()
  security: NooclSecurity;
}

export enum Noocl400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter"
,    InvalidParameter = "invalid_parameter"
,    InvalidFormat = "invalid_format"
,    InvalidTxnid = "invalid_txnid"
,    InvalidConsentid = "invalid_consentid"
}

export enum Noocl400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters"
,    BadRequest = "Bad request"
,    TheFormatParameterIsInvalid = "The format parameter is invalid"
,    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format"
,    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Noocl400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Noocl400ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Noocl400ApplicationJsonErrorDescriptionEnum;
}

export enum Noocl401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication"
,    InvalidAuthorization = "invalid_authorization"
}

export enum Noocl401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed"
,    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Noocl401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Noocl401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Noocl401ApplicationJsonErrorDescriptionEnum;
}

export enum Noocl404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found"
,    UrlNotFound = "url_not_found"
}

export enum Noocl404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found"
,    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Noocl404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Noocl404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Noocl404ApplicationJsonErrorDescriptionEnum;
}

export enum Noocl500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Noocl500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Noocl500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Noocl500ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Noocl500ApplicationJsonErrorDescriptionEnum;
}

export enum Noocl502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Noocl502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Noocl502ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Noocl502ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Noocl502ApplicationJsonErrorDescriptionEnum;
}

export enum Noocl503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Noocl503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Noocl503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Noocl503ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Noocl503ApplicationJsonErrorDescriptionEnum;
}

export enum Noocl504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Noocl504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Noocl504ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Noocl504ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Noocl504ApplicationJsonErrorDescriptionEnum;
}


export class NooclResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  noocl400ApplicationJsonObject?: Noocl400ApplicationJson;

  @Metadata()
  noocl401ApplicationJsonObject?: Noocl401ApplicationJson;

  @Metadata()
  noocl404ApplicationJsonObject?: Noocl404ApplicationJson;

  @Metadata()
  noocl500ApplicationJsonObject?: Noocl500ApplicationJson;

  @Metadata()
  noocl502ApplicationJsonObject?: Noocl502ApplicationJson;

  @Metadata()
  noocl503ApplicationJsonObject?: Noocl503ApplicationJson;

  @Metadata()
  noocl504ApplicationJsonObject?: Noocl504ApplicationJson;
}
