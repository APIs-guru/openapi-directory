import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class LpgtvRequestBodyCertificateParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=UID" })
  uid: string;
}

export enum LpgtvRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class LpgtvRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateParameters" })
  certificateParameters?: LpgtvRequestBodyCertificateParameters;

  @Metadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @Metadata({ data: "json, name=format" })
  format: LpgtvRequestBodyFormatEnum;

  @Metadata({ data: "json, name=txnId" })
  txnId: string;
}


export class LpgtvSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class LpgtvRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: LpgtvRequestBody;

  @Metadata()
  security: LpgtvSecurity;
}

export enum Lpgtv400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter"
,    InvalidParameter = "invalid_parameter"
,    InvalidFormat = "invalid_format"
,    InvalidTxnid = "invalid_txnid"
,    InvalidConsentid = "invalid_consentid"
}

export enum Lpgtv400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters"
,    BadRequest = "Bad request"
,    TheFormatParameterIsInvalid = "The format parameter is invalid"
,    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format"
,    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Lpgtv400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Lpgtv400ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Lpgtv400ApplicationJsonErrorDescriptionEnum;
}

export enum Lpgtv401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication"
,    InvalidAuthorization = "invalid_authorization"
}

export enum Lpgtv401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed"
,    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Lpgtv401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Lpgtv401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Lpgtv401ApplicationJsonErrorDescriptionEnum;
}

export enum Lpgtv404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found"
,    UrlNotFound = "url_not_found"
}

export enum Lpgtv404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found"
,    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Lpgtv404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Lpgtv404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Lpgtv404ApplicationJsonErrorDescriptionEnum;
}

export enum Lpgtv500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Lpgtv500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Lpgtv500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Lpgtv500ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Lpgtv500ApplicationJsonErrorDescriptionEnum;
}

export enum Lpgtv502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Lpgtv502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Lpgtv502ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Lpgtv502ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Lpgtv502ApplicationJsonErrorDescriptionEnum;
}

export enum Lpgtv503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Lpgtv503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Lpgtv503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Lpgtv503ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Lpgtv503ApplicationJsonErrorDescriptionEnum;
}

export enum Lpgtv504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Lpgtv504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Lpgtv504ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Lpgtv504ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Lpgtv504ApplicationJsonErrorDescriptionEnum;
}


export class LpgtvResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  lpgtv400ApplicationJsonObject?: Lpgtv400ApplicationJson;

  @Metadata()
  lpgtv401ApplicationJsonObject?: Lpgtv401ApplicationJson;

  @Metadata()
  lpgtv404ApplicationJsonObject?: Lpgtv404ApplicationJson;

  @Metadata()
  lpgtv500ApplicationJsonObject?: Lpgtv500ApplicationJson;

  @Metadata()
  lpgtv502ApplicationJsonObject?: Lpgtv502ApplicationJson;

  @Metadata()
  lpgtv503ApplicationJsonObject?: Lpgtv503ApplicationJson;

  @Metadata()
  lpgtv504ApplicationJsonObject?: Lpgtv504ApplicationJson;
}
