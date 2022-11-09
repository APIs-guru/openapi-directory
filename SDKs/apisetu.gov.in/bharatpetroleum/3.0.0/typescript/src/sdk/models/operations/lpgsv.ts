import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class LpgsvRequestBodyCertificateParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=LPGID" })
  lpgid: string;

  @Metadata({ data: "json, name=SVID" })
  svid: string;
}

export enum LpgsvRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class LpgsvRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateParameters" })
  certificateParameters?: LpgsvRequestBodyCertificateParameters;

  @Metadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @Metadata({ data: "json, name=format" })
  format: LpgsvRequestBodyFormatEnum;

  @Metadata({ data: "json, name=txnId" })
  txnId: string;
}


export class LpgsvSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class LpgsvRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: LpgsvRequestBody;

  @Metadata()
  security: LpgsvSecurity;
}

export enum Lpgsv400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter"
,    InvalidParameter = "invalid_parameter"
,    InvalidFormat = "invalid_format"
,    InvalidTxnid = "invalid_txnid"
,    InvalidConsentid = "invalid_consentid"
}

export enum Lpgsv400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters"
,    BadRequest = "Bad request"
,    TheFormatParameterIsInvalid = "The format parameter is invalid"
,    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format"
,    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Lpgsv400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Lpgsv400ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Lpgsv400ApplicationJsonErrorDescriptionEnum;
}

export enum Lpgsv401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication"
,    InvalidAuthorization = "invalid_authorization"
}

export enum Lpgsv401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed"
,    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Lpgsv401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Lpgsv401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Lpgsv401ApplicationJsonErrorDescriptionEnum;
}

export enum Lpgsv404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found"
,    UrlNotFound = "url_not_found"
}

export enum Lpgsv404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found"
,    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Lpgsv404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Lpgsv404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Lpgsv404ApplicationJsonErrorDescriptionEnum;
}

export enum Lpgsv500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Lpgsv500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Lpgsv500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Lpgsv500ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Lpgsv500ApplicationJsonErrorDescriptionEnum;
}

export enum Lpgsv502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Lpgsv502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Lpgsv502ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Lpgsv502ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Lpgsv502ApplicationJsonErrorDescriptionEnum;
}

export enum Lpgsv503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Lpgsv503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Lpgsv503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Lpgsv503ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Lpgsv503ApplicationJsonErrorDescriptionEnum;
}

export enum Lpgsv504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Lpgsv504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Lpgsv504ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Lpgsv504ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Lpgsv504ApplicationJsonErrorDescriptionEnum;
}


export class LpgsvResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  lpgsv400ApplicationJsonObject?: Lpgsv400ApplicationJson;

  @Metadata()
  lpgsv401ApplicationJsonObject?: Lpgsv401ApplicationJson;

  @Metadata()
  lpgsv404ApplicationJsonObject?: Lpgsv404ApplicationJson;

  @Metadata()
  lpgsv500ApplicationJsonObject?: Lpgsv500ApplicationJson;

  @Metadata()
  lpgsv502ApplicationJsonObject?: Lpgsv502ApplicationJson;

  @Metadata()
  lpgsv503ApplicationJsonObject?: Lpgsv503ApplicationJson;

  @Metadata()
  lpgsv504ApplicationJsonObject?: Lpgsv504ApplicationJson;
}
