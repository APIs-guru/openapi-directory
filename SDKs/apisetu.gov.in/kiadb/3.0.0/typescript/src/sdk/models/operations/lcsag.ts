import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class LcsagRequestBodyCertificateParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=DOB" })
  dob: string;

  @Metadata({ data: "json, name=FullName" })
  fullName: string;

  @Metadata({ data: "json, name=RegNum" })
  regNum: string;

  @Metadata({ data: "json, name=UID" })
  uid: string;
}

export enum LcsagRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class LcsagRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateParameters" })
  certificateParameters?: LcsagRequestBodyCertificateParameters;

  @Metadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @Metadata({ data: "json, name=format" })
  format: LcsagRequestBodyFormatEnum;

  @Metadata({ data: "json, name=txnId" })
  txnId: string;
}


export class LcsagSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class LcsagRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: LcsagRequestBody;

  @Metadata()
  security: LcsagSecurity;
}

export enum Lcsag400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter"
,    InvalidParameter = "invalid_parameter"
,    InvalidFormat = "invalid_format"
,    InvalidTxnid = "invalid_txnid"
,    InvalidConsentid = "invalid_consentid"
}

export enum Lcsag400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters"
,    BadRequest = "Bad request"
,    TheFormatParameterIsInvalid = "The format parameter is invalid"
,    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format"
,    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Lcsag400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Lcsag400ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Lcsag400ApplicationJsonErrorDescriptionEnum;
}

export enum Lcsag401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication"
,    InvalidAuthorization = "invalid_authorization"
}

export enum Lcsag401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed"
,    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Lcsag401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Lcsag401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Lcsag401ApplicationJsonErrorDescriptionEnum;
}

export enum Lcsag404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found"
,    UrlNotFound = "url_not_found"
}

export enum Lcsag404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found"
,    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Lcsag404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Lcsag404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Lcsag404ApplicationJsonErrorDescriptionEnum;
}

export enum Lcsag500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Lcsag500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Lcsag500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Lcsag500ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Lcsag500ApplicationJsonErrorDescriptionEnum;
}

export enum Lcsag502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Lcsag502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Lcsag502ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Lcsag502ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Lcsag502ApplicationJsonErrorDescriptionEnum;
}

export enum Lcsag503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Lcsag503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Lcsag503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Lcsag503ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Lcsag503ApplicationJsonErrorDescriptionEnum;
}

export enum Lcsag504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Lcsag504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Lcsag504ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Lcsag504ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Lcsag504ApplicationJsonErrorDescriptionEnum;
}


export class LcsagResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  lcsag400ApplicationJsonObject?: Lcsag400ApplicationJson;

  @Metadata()
  lcsag401ApplicationJsonObject?: Lcsag401ApplicationJson;

  @Metadata()
  lcsag404ApplicationJsonObject?: Lcsag404ApplicationJson;

  @Metadata()
  lcsag500ApplicationJsonObject?: Lcsag500ApplicationJson;

  @Metadata()
  lcsag502ApplicationJsonObject?: Lcsag502ApplicationJson;

  @Metadata()
  lcsag503ApplicationJsonObject?: Lcsag503ApplicationJson;

  @Metadata()
  lcsag504ApplicationJsonObject?: Lcsag504ApplicationJson;
}
