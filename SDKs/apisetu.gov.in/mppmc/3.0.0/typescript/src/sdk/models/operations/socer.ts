import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SocerRequestBodyCertificateParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=APPNO" })
  appno: string;

  @Metadata({ data: "json, name=Date_Of_Birth" })
  dateOfBirth: string;

  @Metadata({ data: "json, name=ENROLNO" })
  enrolno: string;

  @Metadata({ data: "json, name=TypOfCert" })
  typOfCert: string;
}

export enum SocerRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class SocerRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateParameters" })
  certificateParameters?: SocerRequestBodyCertificateParameters;

  @Metadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @Metadata({ data: "json, name=format" })
  format: SocerRequestBodyFormatEnum;

  @Metadata({ data: "json, name=txnId" })
  txnId: string;
}


export class SocerSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class SocerRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: SocerRequestBody;

  @Metadata()
  security: SocerSecurity;
}

export enum Socer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter"
,    InvalidParameter = "invalid_parameter"
,    InvalidFormat = "invalid_format"
,    InvalidTxnid = "invalid_txnid"
,    InvalidConsentid = "invalid_consentid"
}

export enum Socer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters"
,    BadRequest = "Bad request"
,    TheFormatParameterIsInvalid = "The format parameter is invalid"
,    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format"
,    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Socer400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Socer400ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Socer400ApplicationJsonErrorDescriptionEnum;
}

export enum Socer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication"
,    InvalidAuthorization = "invalid_authorization"
}

export enum Socer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed"
,    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Socer401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Socer401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Socer401ApplicationJsonErrorDescriptionEnum;
}

export enum Socer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found"
,    UrlNotFound = "url_not_found"
}

export enum Socer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found"
,    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Socer404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Socer404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Socer404ApplicationJsonErrorDescriptionEnum;
}

export enum Socer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Socer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Socer500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Socer500ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Socer500ApplicationJsonErrorDescriptionEnum;
}

export enum Socer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Socer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Socer502ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Socer502ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Socer502ApplicationJsonErrorDescriptionEnum;
}

export enum Socer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Socer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Socer503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Socer503ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Socer503ApplicationJsonErrorDescriptionEnum;
}

export enum Socer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Socer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Socer504ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Socer504ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Socer504ApplicationJsonErrorDescriptionEnum;
}


export class SocerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  socer400ApplicationJsonObject?: Socer400ApplicationJson;

  @Metadata()
  socer401ApplicationJsonObject?: Socer401ApplicationJson;

  @Metadata()
  socer404ApplicationJsonObject?: Socer404ApplicationJson;

  @Metadata()
  socer500ApplicationJsonObject?: Socer500ApplicationJson;

  @Metadata()
  socer502ApplicationJsonObject?: Socer502ApplicationJson;

  @Metadata()
  socer503ApplicationJsonObject?: Socer503ApplicationJson;

  @Metadata()
  socer504ApplicationJsonObject?: Socer504ApplicationJson;
}
