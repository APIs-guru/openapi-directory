import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PncerRequestBodyCertificateParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=aplno" })
  aplno: string;

  @Metadata({ data: "json, name=certno" })
  certno: string;

  @Metadata({ data: "json, name=sccd" })
  sccd: string;
}

export enum PncerRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class PncerRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateParameters" })
  certificateParameters?: PncerRequestBodyCertificateParameters;

  @Metadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @Metadata({ data: "json, name=format" })
  format: PncerRequestBodyFormatEnum;

  @Metadata({ data: "json, name=txnId" })
  txnId: string;
}


export class PncerSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class PncerRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: PncerRequestBody;

  @Metadata()
  security: PncerSecurity;
}

export enum Pncer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter"
,    InvalidParameter = "invalid_parameter"
,    InvalidFormat = "invalid_format"
,    InvalidTxnid = "invalid_txnid"
,    InvalidConsentid = "invalid_consentid"
}

export enum Pncer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters"
,    BadRequest = "Bad request"
,    TheFormatParameterIsInvalid = "The format parameter is invalid"
,    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format"
,    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Pncer400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Pncer400ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Pncer400ApplicationJsonErrorDescriptionEnum;
}

export enum Pncer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication"
,    InvalidAuthorization = "invalid_authorization"
}

export enum Pncer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed"
,    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Pncer401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Pncer401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Pncer401ApplicationJsonErrorDescriptionEnum;
}

export enum Pncer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found"
,    UrlNotFound = "url_not_found"
}

export enum Pncer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found"
,    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Pncer404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Pncer404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Pncer404ApplicationJsonErrorDescriptionEnum;
}

export enum Pncer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Pncer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Pncer500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Pncer500ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Pncer500ApplicationJsonErrorDescriptionEnum;
}

export enum Pncer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Pncer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Pncer502ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Pncer502ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Pncer502ApplicationJsonErrorDescriptionEnum;
}

export enum Pncer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Pncer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Pncer503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Pncer503ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Pncer503ApplicationJsonErrorDescriptionEnum;
}

export enum Pncer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Pncer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Pncer504ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Pncer504ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Pncer504ApplicationJsonErrorDescriptionEnum;
}


export class PncerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  pncer400ApplicationJsonObject?: Pncer400ApplicationJson;

  @Metadata()
  pncer401ApplicationJsonObject?: Pncer401ApplicationJson;

  @Metadata()
  pncer404ApplicationJsonObject?: Pncer404ApplicationJson;

  @Metadata()
  pncer500ApplicationJsonObject?: Pncer500ApplicationJson;

  @Metadata()
  pncer502ApplicationJsonObject?: Pncer502ApplicationJson;

  @Metadata()
  pncer503ApplicationJsonObject?: Pncer503ApplicationJson;

  @Metadata()
  pncer504ApplicationJsonObject?: Pncer504ApplicationJson;
}
