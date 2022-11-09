import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PsnocRequestBodyCertificateParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=DOB" })
  dob: string;

  @Metadata({ data: "json, name=FullName" })
  fullName: string;

  @Metadata({ data: "json, name=RegNum" })
  regNum: string;

  @Metadata({ data: "json, name=UID" })
  uid: string;
}

export enum PsnocRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class PsnocRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateParameters" })
  certificateParameters?: PsnocRequestBodyCertificateParameters;

  @Metadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @Metadata({ data: "json, name=format" })
  format: PsnocRequestBodyFormatEnum;

  @Metadata({ data: "json, name=txnId" })
  txnId: string;
}


export class PsnocSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class PsnocRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: PsnocRequestBody;

  @Metadata()
  security: PsnocSecurity;
}

export enum Psnoc400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter"
,    InvalidParameter = "invalid_parameter"
,    InvalidFormat = "invalid_format"
,    InvalidTxnid = "invalid_txnid"
,    InvalidConsentid = "invalid_consentid"
}

export enum Psnoc400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters"
,    BadRequest = "Bad request"
,    TheFormatParameterIsInvalid = "The format parameter is invalid"
,    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format"
,    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Psnoc400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Psnoc400ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Psnoc400ApplicationJsonErrorDescriptionEnum;
}

export enum Psnoc401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication"
,    InvalidAuthorization = "invalid_authorization"
}

export enum Psnoc401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed"
,    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Psnoc401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Psnoc401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Psnoc401ApplicationJsonErrorDescriptionEnum;
}

export enum Psnoc404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found"
,    UrlNotFound = "url_not_found"
}

export enum Psnoc404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found"
,    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Psnoc404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Psnoc404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Psnoc404ApplicationJsonErrorDescriptionEnum;
}

export enum Psnoc500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Psnoc500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Psnoc500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Psnoc500ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Psnoc500ApplicationJsonErrorDescriptionEnum;
}

export enum Psnoc502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Psnoc502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Psnoc502ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Psnoc502ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Psnoc502ApplicationJsonErrorDescriptionEnum;
}

export enum Psnoc503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Psnoc503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Psnoc503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Psnoc503ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Psnoc503ApplicationJsonErrorDescriptionEnum;
}

export enum Psnoc504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Psnoc504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Psnoc504ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Psnoc504ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Psnoc504ApplicationJsonErrorDescriptionEnum;
}


export class PsnocResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  psnoc400ApplicationJsonObject?: Psnoc400ApplicationJson;

  @Metadata()
  psnoc401ApplicationJsonObject?: Psnoc401ApplicationJson;

  @Metadata()
  psnoc404ApplicationJsonObject?: Psnoc404ApplicationJson;

  @Metadata()
  psnoc500ApplicationJsonObject?: Psnoc500ApplicationJson;

  @Metadata()
  psnoc502ApplicationJsonObject?: Psnoc502ApplicationJson;

  @Metadata()
  psnoc503ApplicationJsonObject?: Psnoc503ApplicationJson;

  @Metadata()
  psnoc504ApplicationJsonObject?: Psnoc504ApplicationJson;
}
