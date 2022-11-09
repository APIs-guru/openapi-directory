import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SkmstRequestBodyCertificateParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=txt10thRollNo" })
  txt10thRollNo: string;

  @Metadata({ data: "json, name=txtCandidateAppSeq" })
  txtCandidateAppSeq: string;

  @Metadata({ data: "json, name=txtExamDate" })
  txtExamDate: string;
}

export enum SkmstRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class SkmstRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateParameters" })
  certificateParameters?: SkmstRequestBodyCertificateParameters;

  @Metadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @Metadata({ data: "json, name=format" })
  format: SkmstRequestBodyFormatEnum;

  @Metadata({ data: "json, name=txnId" })
  txnId: string;
}


export class SkmstSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class SkmstRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: SkmstRequestBody;

  @Metadata()
  security: SkmstSecurity;
}

export enum Skmst400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter"
,    InvalidParameter = "invalid_parameter"
,    InvalidFormat = "invalid_format"
,    InvalidTxnid = "invalid_txnid"
,    InvalidConsentid = "invalid_consentid"
}

export enum Skmst400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters"
,    BadRequest = "Bad request"
,    TheFormatParameterIsInvalid = "The format parameter is invalid"
,    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format"
,    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Skmst400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Skmst400ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Skmst400ApplicationJsonErrorDescriptionEnum;
}

export enum Skmst401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication"
,    InvalidAuthorization = "invalid_authorization"
}

export enum Skmst401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed"
,    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Skmst401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Skmst401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Skmst401ApplicationJsonErrorDescriptionEnum;
}

export enum Skmst404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found"
,    UrlNotFound = "url_not_found"
}

export enum Skmst404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found"
,    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Skmst404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Skmst404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Skmst404ApplicationJsonErrorDescriptionEnum;
}

export enum Skmst500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Skmst500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Skmst500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Skmst500ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Skmst500ApplicationJsonErrorDescriptionEnum;
}

export enum Skmst502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Skmst502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Skmst502ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Skmst502ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Skmst502ApplicationJsonErrorDescriptionEnum;
}

export enum Skmst503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Skmst503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Skmst503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Skmst503ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Skmst503ApplicationJsonErrorDescriptionEnum;
}

export enum Skmst504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Skmst504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Skmst504ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Skmst504ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Skmst504ApplicationJsonErrorDescriptionEnum;
}


export class SkmstResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  skmst400ApplicationJsonObject?: Skmst400ApplicationJson;

  @Metadata()
  skmst401ApplicationJsonObject?: Skmst401ApplicationJson;

  @Metadata()
  skmst404ApplicationJsonObject?: Skmst404ApplicationJson;

  @Metadata()
  skmst500ApplicationJsonObject?: Skmst500ApplicationJson;

  @Metadata()
  skmst502ApplicationJsonObject?: Skmst502ApplicationJson;

  @Metadata()
  skmst503ApplicationJsonObject?: Skmst503ApplicationJson;

  @Metadata()
  skmst504ApplicationJsonObject?: Skmst504ApplicationJson;
}
