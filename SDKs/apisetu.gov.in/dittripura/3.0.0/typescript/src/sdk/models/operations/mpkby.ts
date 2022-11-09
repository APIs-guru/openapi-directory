import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MpkbyRequestBodyCertificateParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=RefNo" })
  refNo: string;

  @Metadata({ data: "json, name=TokenNo" })
  tokenNo: string;
}

export enum MpkbyRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class MpkbyRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateParameters" })
  certificateParameters?: MpkbyRequestBodyCertificateParameters;

  @Metadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @Metadata({ data: "json, name=format" })
  format: MpkbyRequestBodyFormatEnum;

  @Metadata({ data: "json, name=txnId" })
  txnId: string;
}


export class MpkbySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class MpkbyRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: MpkbyRequestBody;

  @Metadata()
  security: MpkbySecurity;
}

export enum Mpkby400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter"
,    InvalidParameter = "invalid_parameter"
,    InvalidFormat = "invalid_format"
,    InvalidTxnid = "invalid_txnid"
,    InvalidConsentid = "invalid_consentid"
}

export enum Mpkby400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters"
,    BadRequest = "Bad request"
,    TheFormatParameterIsInvalid = "The format parameter is invalid"
,    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format"
,    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Mpkby400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Mpkby400ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Mpkby400ApplicationJsonErrorDescriptionEnum;
}

export enum Mpkby401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication"
,    InvalidAuthorization = "invalid_authorization"
}

export enum Mpkby401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed"
,    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Mpkby401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Mpkby401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Mpkby401ApplicationJsonErrorDescriptionEnum;
}

export enum Mpkby404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found"
,    UrlNotFound = "url_not_found"
}

export enum Mpkby404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found"
,    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Mpkby404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Mpkby404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Mpkby404ApplicationJsonErrorDescriptionEnum;
}

export enum Mpkby500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Mpkby500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Mpkby500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Mpkby500ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Mpkby500ApplicationJsonErrorDescriptionEnum;
}

export enum Mpkby502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Mpkby502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Mpkby502ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Mpkby502ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Mpkby502ApplicationJsonErrorDescriptionEnum;
}

export enum Mpkby503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Mpkby503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Mpkby503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Mpkby503ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Mpkby503ApplicationJsonErrorDescriptionEnum;
}

export enum Mpkby504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Mpkby504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Mpkby504ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Mpkby504ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Mpkby504ApplicationJsonErrorDescriptionEnum;
}


export class MpkbyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  mpkby400ApplicationJsonObject?: Mpkby400ApplicationJson;

  @Metadata()
  mpkby401ApplicationJsonObject?: Mpkby401ApplicationJson;

  @Metadata()
  mpkby404ApplicationJsonObject?: Mpkby404ApplicationJson;

  @Metadata()
  mpkby500ApplicationJsonObject?: Mpkby500ApplicationJson;

  @Metadata()
  mpkby502ApplicationJsonObject?: Mpkby502ApplicationJson;

  @Metadata()
  mpkby503ApplicationJsonObject?: Mpkby503ApplicationJson;

  @Metadata()
  mpkby504ApplicationJsonObject?: Mpkby504ApplicationJson;
}
