import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SscerRequestBodyCertificateParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FullName" })
  fullName: string;

  @SpeakeasyMetadata({ data: "json, name=rollno" })
  rollno: string;

  @SpeakeasyMetadata({ data: "json, name=year" })
  year: string;
}

export enum SscerRequestBodyFormatEnum {
    Xml = "xml",
    Pdf = "pdf"
}


export class SscerRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateParameters" })
  certificateParameters?: SscerRequestBodyCertificateParameters;

  @SpeakeasyMetadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: SscerRequestBodyFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=txnId" })
  txnId: string;
}


export class SscerSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}

export enum Sscer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}

export enum Sscer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Sscer400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Sscer400ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Sscer400ApplicationJsonErrorDescriptionEnum;
}

export enum Sscer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}

export enum Sscer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Sscer401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Sscer401ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Sscer401ApplicationJsonErrorDescriptionEnum;
}

export enum Sscer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}

export enum Sscer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Sscer404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Sscer404ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Sscer404ApplicationJsonErrorDescriptionEnum;
}

export enum Sscer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Sscer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Sscer500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Sscer500ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Sscer500ApplicationJsonErrorDescriptionEnum;
}

export enum Sscer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Sscer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Sscer502ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Sscer502ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Sscer502ApplicationJsonErrorDescriptionEnum;
}

export enum Sscer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Sscer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Sscer503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Sscer503ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Sscer503ApplicationJsonErrorDescriptionEnum;
}

export enum Sscer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Sscer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Sscer504ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Sscer504ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Sscer504ApplicationJsonErrorDescriptionEnum;
}


export class SscerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: SscerRequestBody;

  @SpeakeasyMetadata()
  security: SscerSecurity;
}


export class SscerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  sscer400ApplicationJsonObject?: Sscer400ApplicationJson;

  @SpeakeasyMetadata()
  sscer401ApplicationJsonObject?: Sscer401ApplicationJson;

  @SpeakeasyMetadata()
  sscer404ApplicationJsonObject?: Sscer404ApplicationJson;

  @SpeakeasyMetadata()
  sscer500ApplicationJsonObject?: Sscer500ApplicationJson;

  @SpeakeasyMetadata()
  sscer502ApplicationJsonObject?: Sscer502ApplicationJson;

  @SpeakeasyMetadata()
  sscer503ApplicationJsonObject?: Sscer503ApplicationJson;

  @SpeakeasyMetadata()
  sscer504ApplicationJsonObject?: Sscer504ApplicationJson;
}
