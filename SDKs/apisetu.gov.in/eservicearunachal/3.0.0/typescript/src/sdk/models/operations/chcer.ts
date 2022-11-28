import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ChcerRequestBodyCertificateParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FullName" })
  fullName: string;

  @SpeakeasyMetadata({ data: "json, name=RefNo" })
  refNo: string;

  @SpeakeasyMetadata({ data: "json, name=TokenNo" })
  tokenNo: string;
}

export enum ChcerRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class ChcerRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateParameters" })
  certificateParameters?: ChcerRequestBodyCertificateParameters;

  @SpeakeasyMetadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: ChcerRequestBodyFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=txnId" })
  txnId: string;
}


export class ChcerSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}

export enum Chcer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}

export enum Chcer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Chcer400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Chcer400ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Chcer400ApplicationJsonErrorDescriptionEnum;
}

export enum Chcer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}

export enum Chcer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Chcer401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Chcer401ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Chcer401ApplicationJsonErrorDescriptionEnum;
}

export enum Chcer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}

export enum Chcer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Chcer404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Chcer404ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Chcer404ApplicationJsonErrorDescriptionEnum;
}

export enum Chcer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Chcer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Chcer500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Chcer500ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Chcer500ApplicationJsonErrorDescriptionEnum;
}

export enum Chcer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Chcer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Chcer502ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Chcer502ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Chcer502ApplicationJsonErrorDescriptionEnum;
}

export enum Chcer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Chcer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Chcer503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Chcer503ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Chcer503ApplicationJsonErrorDescriptionEnum;
}

export enum Chcer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Chcer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Chcer504ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Chcer504ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Chcer504ApplicationJsonErrorDescriptionEnum;
}


export class ChcerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ChcerRequestBody;

  @SpeakeasyMetadata()
  security: ChcerSecurity;
}


export class ChcerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  chcer400ApplicationJsonObject?: Chcer400ApplicationJson;

  @SpeakeasyMetadata()
  chcer401ApplicationJsonObject?: Chcer401ApplicationJson;

  @SpeakeasyMetadata()
  chcer404ApplicationJsonObject?: Chcer404ApplicationJson;

  @SpeakeasyMetadata()
  chcer500ApplicationJsonObject?: Chcer500ApplicationJson;

  @SpeakeasyMetadata()
  chcer502ApplicationJsonObject?: Chcer502ApplicationJson;

  @SpeakeasyMetadata()
  chcer503ApplicationJsonObject?: Chcer503ApplicationJson;

  @SpeakeasyMetadata()
  chcer504ApplicationJsonObject?: Chcer504ApplicationJson;
}
