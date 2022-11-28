import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GicerRequestBodyCertificateParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PolicyNo" })
  policyNo: string;

  @SpeakeasyMetadata({ data: "json, name=Val" })
  val: string;

  @SpeakeasyMetadata({ data: "json, name=Verification" })
  verification: string;
}

export enum GicerRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class GicerRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateParameters" })
  certificateParameters?: GicerRequestBodyCertificateParameters;

  @SpeakeasyMetadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: GicerRequestBodyFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=txnId" })
  txnId: string;
}


export class GicerSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}

export enum Gicer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}

export enum Gicer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Gicer400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Gicer400ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Gicer400ApplicationJsonErrorDescriptionEnum;
}

export enum Gicer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}

export enum Gicer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Gicer401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Gicer401ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Gicer401ApplicationJsonErrorDescriptionEnum;
}

export enum Gicer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}

export enum Gicer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Gicer404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Gicer404ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Gicer404ApplicationJsonErrorDescriptionEnum;
}

export enum Gicer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Gicer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Gicer500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Gicer500ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Gicer500ApplicationJsonErrorDescriptionEnum;
}

export enum Gicer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Gicer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Gicer502ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Gicer502ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Gicer502ApplicationJsonErrorDescriptionEnum;
}

export enum Gicer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Gicer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Gicer503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Gicer503ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Gicer503ApplicationJsonErrorDescriptionEnum;
}

export enum Gicer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Gicer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Gicer504ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Gicer504ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Gicer504ApplicationJsonErrorDescriptionEnum;
}


export class GicerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: GicerRequestBody;

  @SpeakeasyMetadata()
  security: GicerSecurity;
}


export class GicerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  gicer400ApplicationJsonObject?: Gicer400ApplicationJson;

  @SpeakeasyMetadata()
  gicer401ApplicationJsonObject?: Gicer401ApplicationJson;

  @SpeakeasyMetadata()
  gicer404ApplicationJsonObject?: Gicer404ApplicationJson;

  @SpeakeasyMetadata()
  gicer500ApplicationJsonObject?: Gicer500ApplicationJson;

  @SpeakeasyMetadata()
  gicer502ApplicationJsonObject?: Gicer502ApplicationJson;

  @SpeakeasyMetadata()
  gicer503ApplicationJsonObject?: Gicer503ApplicationJson;

  @SpeakeasyMetadata()
  gicer504ApplicationJsonObject?: Gicer504ApplicationJson;
}
