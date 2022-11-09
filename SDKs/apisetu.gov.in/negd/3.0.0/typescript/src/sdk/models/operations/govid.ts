import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GovidRequestBodyCertificateParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=FullName" })
  fullName: string;

  @Metadata({ data: "json, name=cardno" })
  cardno: string;
}

export enum GovidRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class GovidRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateParameters" })
  certificateParameters?: GovidRequestBodyCertificateParameters;

  @Metadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @Metadata({ data: "json, name=format" })
  format: GovidRequestBodyFormatEnum;

  @Metadata({ data: "json, name=txnId" })
  txnId: string;
}


export class GovidSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class GovidRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: GovidRequestBody;

  @Metadata()
  security: GovidSecurity;
}

export enum Govid400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter"
,    InvalidParameter = "invalid_parameter"
,    InvalidFormat = "invalid_format"
,    InvalidTxnid = "invalid_txnid"
,    InvalidConsentid = "invalid_consentid"
}

export enum Govid400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters"
,    BadRequest = "Bad request"
,    TheFormatParameterIsInvalid = "The format parameter is invalid"
,    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format"
,    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Govid400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Govid400ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Govid400ApplicationJsonErrorDescriptionEnum;
}

export enum Govid401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication"
,    InvalidAuthorization = "invalid_authorization"
}

export enum Govid401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed"
,    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Govid401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Govid401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Govid401ApplicationJsonErrorDescriptionEnum;
}

export enum Govid404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found"
,    UrlNotFound = "url_not_found"
}

export enum Govid404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found"
,    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Govid404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Govid404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Govid404ApplicationJsonErrorDescriptionEnum;
}

export enum Govid500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Govid500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Govid500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Govid500ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Govid500ApplicationJsonErrorDescriptionEnum;
}

export enum Govid502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Govid502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Govid502ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Govid502ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Govid502ApplicationJsonErrorDescriptionEnum;
}

export enum Govid503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Govid503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Govid503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Govid503ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Govid503ApplicationJsonErrorDescriptionEnum;
}

export enum Govid504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Govid504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Govid504ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Govid504ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Govid504ApplicationJsonErrorDescriptionEnum;
}


export class GovidResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  govid400ApplicationJsonObject?: Govid400ApplicationJson;

  @Metadata()
  govid401ApplicationJsonObject?: Govid401ApplicationJson;

  @Metadata()
  govid404ApplicationJsonObject?: Govid404ApplicationJson;

  @Metadata()
  govid500ApplicationJsonObject?: Govid500ApplicationJson;

  @Metadata()
  govid502ApplicationJsonObject?: Govid502ApplicationJson;

  @Metadata()
  govid503ApplicationJsonObject?: Govid503ApplicationJson;

  @Metadata()
  govid504ApplicationJsonObject?: Govid504ApplicationJson;
}
