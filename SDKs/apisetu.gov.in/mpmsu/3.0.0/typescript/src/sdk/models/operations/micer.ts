import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MicerRequestBodyCertificateParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=APPNO" })
  appno: string;

  @SpeakeasyMetadata({ data: "json, name=Date_Of_Birth" })
  dateOfBirth: string;

  @SpeakeasyMetadata({ data: "json, name=ENROLNO" })
  enrolno: string;

  @SpeakeasyMetadata({ data: "json, name=ROLLNO" })
  rollno: string;
}

export enum MicerRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class MicerRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateParameters" })
  certificateParameters?: MicerRequestBodyCertificateParameters;

  @SpeakeasyMetadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: MicerRequestBodyFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=txnId" })
  txnId: string;
}


export class MicerSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}

export enum Micer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}

export enum Micer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Micer400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Micer400ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Micer400ApplicationJsonErrorDescriptionEnum;
}

export enum Micer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}

export enum Micer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Micer401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Micer401ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Micer401ApplicationJsonErrorDescriptionEnum;
}

export enum Micer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}

export enum Micer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Micer404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Micer404ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Micer404ApplicationJsonErrorDescriptionEnum;
}

export enum Micer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Micer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Micer500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Micer500ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Micer500ApplicationJsonErrorDescriptionEnum;
}

export enum Micer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Micer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Micer502ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Micer502ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Micer502ApplicationJsonErrorDescriptionEnum;
}

export enum Micer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Micer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Micer503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Micer503ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Micer503ApplicationJsonErrorDescriptionEnum;
}

export enum Micer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Micer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Micer504ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Micer504ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Micer504ApplicationJsonErrorDescriptionEnum;
}


export class MicerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: MicerRequestBody;

  @SpeakeasyMetadata()
  security: MicerSecurity;
}


export class MicerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  micer400ApplicationJsonObject?: Micer400ApplicationJson;

  @SpeakeasyMetadata()
  micer401ApplicationJsonObject?: Micer401ApplicationJson;

  @SpeakeasyMetadata()
  micer404ApplicationJsonObject?: Micer404ApplicationJson;

  @SpeakeasyMetadata()
  micer500ApplicationJsonObject?: Micer500ApplicationJson;

  @SpeakeasyMetadata()
  micer502ApplicationJsonObject?: Micer502ApplicationJson;

  @SpeakeasyMetadata()
  micer503ApplicationJsonObject?: Micer503ApplicationJson;

  @SpeakeasyMetadata()
  micer504ApplicationJsonObject?: Micer504ApplicationJson;
}
