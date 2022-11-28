import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class VrwmiRequestBodyCertificateParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RefNo" })
  refNo: string;

  @SpeakeasyMetadata({ data: "json, name=TokenNo" })
  tokenNo: string;
}

export enum VrwmiRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class VrwmiRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateParameters" })
  certificateParameters?: VrwmiRequestBodyCertificateParameters;

  @SpeakeasyMetadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: VrwmiRequestBodyFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=txnId" })
  txnId: string;
}


export class VrwmiSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}

export enum Vrwmi400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}

export enum Vrwmi400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Vrwmi400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Vrwmi400ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Vrwmi400ApplicationJsonErrorDescriptionEnum;
}

export enum Vrwmi401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}

export enum Vrwmi401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Vrwmi401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Vrwmi401ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Vrwmi401ApplicationJsonErrorDescriptionEnum;
}

export enum Vrwmi404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}

export enum Vrwmi404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Vrwmi404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Vrwmi404ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Vrwmi404ApplicationJsonErrorDescriptionEnum;
}

export enum Vrwmi500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Vrwmi500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Vrwmi500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Vrwmi500ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Vrwmi500ApplicationJsonErrorDescriptionEnum;
}

export enum Vrwmi502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Vrwmi502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Vrwmi502ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Vrwmi502ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Vrwmi502ApplicationJsonErrorDescriptionEnum;
}

export enum Vrwmi503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Vrwmi503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Vrwmi503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Vrwmi503ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Vrwmi503ApplicationJsonErrorDescriptionEnum;
}

export enum Vrwmi504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Vrwmi504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Vrwmi504ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Vrwmi504ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Vrwmi504ApplicationJsonErrorDescriptionEnum;
}


export class VrwmiRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: VrwmiRequestBody;

  @SpeakeasyMetadata()
  security: VrwmiSecurity;
}


export class VrwmiResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  vrwmi400ApplicationJsonObject?: Vrwmi400ApplicationJson;

  @SpeakeasyMetadata()
  vrwmi401ApplicationJsonObject?: Vrwmi401ApplicationJson;

  @SpeakeasyMetadata()
  vrwmi404ApplicationJsonObject?: Vrwmi404ApplicationJson;

  @SpeakeasyMetadata()
  vrwmi500ApplicationJsonObject?: Vrwmi500ApplicationJson;

  @SpeakeasyMetadata()
  vrwmi502ApplicationJsonObject?: Vrwmi502ApplicationJson;

  @SpeakeasyMetadata()
  vrwmi503ApplicationJsonObject?: Vrwmi503ApplicationJson;

  @SpeakeasyMetadata()
  vrwmi504ApplicationJsonObject?: Vrwmi504ApplicationJson;
}
