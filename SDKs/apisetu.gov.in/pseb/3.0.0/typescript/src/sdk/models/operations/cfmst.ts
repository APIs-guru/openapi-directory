import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CfmstRequestBodyCertificateParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=FullName" })
  fullName: string;

  @Metadata({ data: "json, name=UID" })
  uid: string;

  @Metadata({ data: "json, name=rollno" })
  rollno: string;

  @Metadata({ data: "json, name=year" })
  year: string;
}

export enum CfmstRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class CfmstRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateParameters" })
  certificateParameters?: CfmstRequestBodyCertificateParameters;

  @Metadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @Metadata({ data: "json, name=format" })
  format: CfmstRequestBodyFormatEnum;

  @Metadata({ data: "json, name=txnId" })
  txnId: string;
}


export class CfmstSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class CfmstRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: CfmstRequestBody;

  @Metadata()
  security: CfmstSecurity;
}

export enum Cfmst400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter"
,    InvalidParameter = "invalid_parameter"
,    InvalidFormat = "invalid_format"
,    InvalidTxnid = "invalid_txnid"
,    InvalidConsentid = "invalid_consentid"
}

export enum Cfmst400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters"
,    BadRequest = "Bad request"
,    TheFormatParameterIsInvalid = "The format parameter is invalid"
,    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format"
,    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Cfmst400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Cfmst400ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Cfmst400ApplicationJsonErrorDescriptionEnum;
}

export enum Cfmst401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication"
,    InvalidAuthorization = "invalid_authorization"
}

export enum Cfmst401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed"
,    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Cfmst401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Cfmst401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Cfmst401ApplicationJsonErrorDescriptionEnum;
}

export enum Cfmst404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found"
,    UrlNotFound = "url_not_found"
}

export enum Cfmst404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found"
,    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Cfmst404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Cfmst404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Cfmst404ApplicationJsonErrorDescriptionEnum;
}

export enum Cfmst500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Cfmst500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Cfmst500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Cfmst500ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Cfmst500ApplicationJsonErrorDescriptionEnum;
}

export enum Cfmst502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Cfmst502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Cfmst502ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Cfmst502ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Cfmst502ApplicationJsonErrorDescriptionEnum;
}

export enum Cfmst503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Cfmst503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Cfmst503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Cfmst503ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Cfmst503ApplicationJsonErrorDescriptionEnum;
}

export enum Cfmst504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Cfmst504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Cfmst504ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Cfmst504ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Cfmst504ApplicationJsonErrorDescriptionEnum;
}


export class CfmstResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  cfmst400ApplicationJsonObject?: Cfmst400ApplicationJson;

  @Metadata()
  cfmst401ApplicationJsonObject?: Cfmst401ApplicationJson;

  @Metadata()
  cfmst404ApplicationJsonObject?: Cfmst404ApplicationJson;

  @Metadata()
  cfmst500ApplicationJsonObject?: Cfmst500ApplicationJson;

  @Metadata()
  cfmst502ApplicationJsonObject?: Cfmst502ApplicationJson;

  @Metadata()
  cfmst503ApplicationJsonObject?: Cfmst503ApplicationJson;

  @Metadata()
  cfmst504ApplicationJsonObject?: Cfmst504ApplicationJson;
}
