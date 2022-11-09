import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AlimwRequestBodyCertificateParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=RefNo" })
  refNo: string;

  @Metadata({ data: "json, name=TokenNo" })
  tokenNo: string;
}

export enum AlimwRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class AlimwRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateParameters" })
  certificateParameters?: AlimwRequestBodyCertificateParameters;

  @Metadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @Metadata({ data: "json, name=format" })
  format: AlimwRequestBodyFormatEnum;

  @Metadata({ data: "json, name=txnId" })
  txnId: string;
}


export class AlimwSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class AlimwRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: AlimwRequestBody;

  @Metadata()
  security: AlimwSecurity;
}

export enum Alimw400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter"
,    InvalidParameter = "invalid_parameter"
,    InvalidFormat = "invalid_format"
,    InvalidTxnid = "invalid_txnid"
,    InvalidConsentid = "invalid_consentid"
}

export enum Alimw400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters"
,    BadRequest = "Bad request"
,    TheFormatParameterIsInvalid = "The format parameter is invalid"
,    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format"
,    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Alimw400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Alimw400ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Alimw400ApplicationJsonErrorDescriptionEnum;
}

export enum Alimw401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication"
,    InvalidAuthorization = "invalid_authorization"
}

export enum Alimw401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed"
,    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Alimw401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Alimw401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Alimw401ApplicationJsonErrorDescriptionEnum;
}

export enum Alimw404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found"
,    UrlNotFound = "url_not_found"
}

export enum Alimw404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found"
,    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Alimw404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Alimw404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Alimw404ApplicationJsonErrorDescriptionEnum;
}

export enum Alimw500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Alimw500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Alimw500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Alimw500ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Alimw500ApplicationJsonErrorDescriptionEnum;
}

export enum Alimw502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Alimw502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Alimw502ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Alimw502ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Alimw502ApplicationJsonErrorDescriptionEnum;
}

export enum Alimw503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Alimw503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Alimw503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Alimw503ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Alimw503ApplicationJsonErrorDescriptionEnum;
}

export enum Alimw504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Alimw504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Alimw504ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Alimw504ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Alimw504ApplicationJsonErrorDescriptionEnum;
}


export class AlimwResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  alimw400ApplicationJsonObject?: Alimw400ApplicationJson;

  @Metadata()
  alimw401ApplicationJsonObject?: Alimw401ApplicationJson;

  @Metadata()
  alimw404ApplicationJsonObject?: Alimw404ApplicationJson;

  @Metadata()
  alimw500ApplicationJsonObject?: Alimw500ApplicationJson;

  @Metadata()
  alimw502ApplicationJsonObject?: Alimw502ApplicationJson;

  @Metadata()
  alimw503ApplicationJsonObject?: Alimw503ApplicationJson;

  @Metadata()
  alimw504ApplicationJsonObject?: Alimw504ApplicationJson;
}
