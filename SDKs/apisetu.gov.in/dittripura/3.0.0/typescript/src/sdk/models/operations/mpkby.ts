import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MpkbyRequestBodyCertificateParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RefNo" })
  refNo: string;

  @SpeakeasyMetadata({ data: "json, name=TokenNo" })
  tokenNo: string;
}

export enum MpkbyRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class MpkbyRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateParameters" })
  certificateParameters?: MpkbyRequestBodyCertificateParameters;

  @SpeakeasyMetadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: MpkbyRequestBodyFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=txnId" })
  txnId: string;
}


export class MpkbySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}

export enum Mpkby400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}

export enum Mpkby400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Mpkby400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Mpkby400ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Mpkby400ApplicationJsonErrorDescriptionEnum;
}

export enum Mpkby401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}

export enum Mpkby401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Mpkby401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Mpkby401ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Mpkby401ApplicationJsonErrorDescriptionEnum;
}

export enum Mpkby404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}

export enum Mpkby404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Mpkby404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Mpkby404ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Mpkby404ApplicationJsonErrorDescriptionEnum;
}

export enum Mpkby500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Mpkby500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Mpkby500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Mpkby500ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Mpkby500ApplicationJsonErrorDescriptionEnum;
}

export enum Mpkby502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Mpkby502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Mpkby502ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Mpkby502ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Mpkby502ApplicationJsonErrorDescriptionEnum;
}

export enum Mpkby503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Mpkby503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Mpkby503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Mpkby503ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Mpkby503ApplicationJsonErrorDescriptionEnum;
}

export enum Mpkby504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Mpkby504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Mpkby504ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Mpkby504ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Mpkby504ApplicationJsonErrorDescriptionEnum;
}


export class MpkbyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: MpkbyRequestBody;

  @SpeakeasyMetadata()
  security: MpkbySecurity;
}


export class MpkbyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  mpkby400ApplicationJsonObject?: Mpkby400ApplicationJson;

  @SpeakeasyMetadata()
  mpkby401ApplicationJsonObject?: Mpkby401ApplicationJson;

  @SpeakeasyMetadata()
  mpkby404ApplicationJsonObject?: Mpkby404ApplicationJson;

  @SpeakeasyMetadata()
  mpkby500ApplicationJsonObject?: Mpkby500ApplicationJson;

  @SpeakeasyMetadata()
  mpkby502ApplicationJsonObject?: Mpkby502ApplicationJson;

  @SpeakeasyMetadata()
  mpkby503ApplicationJsonObject?: Mpkby503ApplicationJson;

  @SpeakeasyMetadata()
  mpkby504ApplicationJsonObject?: Mpkby504ApplicationJson;
}
