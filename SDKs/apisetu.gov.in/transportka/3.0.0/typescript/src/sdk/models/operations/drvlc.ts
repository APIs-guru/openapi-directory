import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DrvlcRequestBodyCertificateParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DOB" })
  dob: string;

  @SpeakeasyMetadata({ data: "json, name=FullName" })
  fullName: string;

  @SpeakeasyMetadata({ data: "json, name=dlno" })
  dlno: string;
}

export enum DrvlcRequestBodyFormatEnum {
    Xml = "xml",
    Pdf = "pdf"
}


export class DrvlcRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateParameters" })
  certificateParameters?: DrvlcRequestBodyCertificateParameters;

  @SpeakeasyMetadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: DrvlcRequestBodyFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=txnId" })
  txnId: string;
}


export class DrvlcSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}

export enum Drvlc400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}

export enum Drvlc400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Drvlc400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Drvlc400ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Drvlc400ApplicationJsonErrorDescriptionEnum;
}

export enum Drvlc401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}

export enum Drvlc401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Drvlc401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Drvlc401ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Drvlc401ApplicationJsonErrorDescriptionEnum;
}

export enum Drvlc404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}

export enum Drvlc404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Drvlc404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Drvlc404ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Drvlc404ApplicationJsonErrorDescriptionEnum;
}

export enum Drvlc500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Drvlc500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Drvlc500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Drvlc500ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Drvlc500ApplicationJsonErrorDescriptionEnum;
}

export enum Drvlc502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Drvlc502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Drvlc502ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Drvlc502ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Drvlc502ApplicationJsonErrorDescriptionEnum;
}

export enum Drvlc503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Drvlc503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Drvlc503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Drvlc503ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Drvlc503ApplicationJsonErrorDescriptionEnum;
}

export enum Drvlc504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Drvlc504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Drvlc504ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Drvlc504ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Drvlc504ApplicationJsonErrorDescriptionEnum;
}


export class DrvlcRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: DrvlcRequestBody;

  @SpeakeasyMetadata()
  security: DrvlcSecurity;
}


export class DrvlcResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  drvlc400ApplicationJsonObject?: Drvlc400ApplicationJson;

  @SpeakeasyMetadata()
  drvlc401ApplicationJsonObject?: Drvlc401ApplicationJson;

  @SpeakeasyMetadata()
  drvlc404ApplicationJsonObject?: Drvlc404ApplicationJson;

  @SpeakeasyMetadata()
  drvlc500ApplicationJsonObject?: Drvlc500ApplicationJson;

  @SpeakeasyMetadata()
  drvlc502ApplicationJsonObject?: Drvlc502ApplicationJson;

  @SpeakeasyMetadata()
  drvlc503ApplicationJsonObject?: Drvlc503ApplicationJson;

  @SpeakeasyMetadata()
  drvlc504ApplicationJsonObject?: Drvlc504ApplicationJson;
}
