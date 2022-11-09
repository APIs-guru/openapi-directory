import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MicerRequestBodyCertificateParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=APPNO" })
  appno: string;

  @Metadata({ data: "json, name=Date_Of_Birth" })
  dateOfBirth: string;

  @Metadata({ data: "json, name=ENROLNO" })
  enrolno: string;

  @Metadata({ data: "json, name=ROLLNO" })
  rollno: string;
}

export enum MicerRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class MicerRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateParameters" })
  certificateParameters?: MicerRequestBodyCertificateParameters;

  @Metadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @Metadata({ data: "json, name=format" })
  format: MicerRequestBodyFormatEnum;

  @Metadata({ data: "json, name=txnId" })
  txnId: string;
}


export class MicerSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class MicerRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: MicerRequestBody;

  @Metadata()
  security: MicerSecurity;
}

export enum Micer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter"
,    InvalidParameter = "invalid_parameter"
,    InvalidFormat = "invalid_format"
,    InvalidTxnid = "invalid_txnid"
,    InvalidConsentid = "invalid_consentid"
}

export enum Micer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters"
,    BadRequest = "Bad request"
,    TheFormatParameterIsInvalid = "The format parameter is invalid"
,    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format"
,    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Micer400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Micer400ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Micer400ApplicationJsonErrorDescriptionEnum;
}

export enum Micer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication"
,    InvalidAuthorization = "invalid_authorization"
}

export enum Micer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed"
,    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Micer401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Micer401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Micer401ApplicationJsonErrorDescriptionEnum;
}

export enum Micer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found"
,    UrlNotFound = "url_not_found"
}

export enum Micer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found"
,    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Micer404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Micer404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Micer404ApplicationJsonErrorDescriptionEnum;
}

export enum Micer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Micer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Micer500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Micer500ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Micer500ApplicationJsonErrorDescriptionEnum;
}

export enum Micer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Micer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Micer502ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Micer502ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Micer502ApplicationJsonErrorDescriptionEnum;
}

export enum Micer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Micer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Micer503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Micer503ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Micer503ApplicationJsonErrorDescriptionEnum;
}

export enum Micer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Micer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Micer504ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Micer504ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Micer504ApplicationJsonErrorDescriptionEnum;
}


export class MicerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  micer400ApplicationJsonObject?: Micer400ApplicationJson;

  @Metadata()
  micer401ApplicationJsonObject?: Micer401ApplicationJson;

  @Metadata()
  micer404ApplicationJsonObject?: Micer404ApplicationJson;

  @Metadata()
  micer500ApplicationJsonObject?: Micer500ApplicationJson;

  @Metadata()
  micer502ApplicationJsonObject?: Micer502ApplicationJson;

  @Metadata()
  micer503ApplicationJsonObject?: Micer503ApplicationJson;

  @Metadata()
  micer504ApplicationJsonObject?: Micer504ApplicationJson;
}
