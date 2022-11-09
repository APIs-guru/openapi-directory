import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PrfndRequestBodyCertificateParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=AC_NO" })
  acNo: string;

  @Metadata({ data: "json, name=DOB" })
  dob: string;
}

export enum PrfndRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class PrfndRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateParameters" })
  certificateParameters?: PrfndRequestBodyCertificateParameters;

  @Metadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @Metadata({ data: "json, name=format" })
  format: PrfndRequestBodyFormatEnum;

  @Metadata({ data: "json, name=txnId" })
  txnId: string;
}


export class PrfndSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class PrfndRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: PrfndRequestBody;

  @Metadata()
  security: PrfndSecurity;
}

export enum Prfnd400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter"
,    InvalidParameter = "invalid_parameter"
,    InvalidFormat = "invalid_format"
,    InvalidTxnid = "invalid_txnid"
,    InvalidConsentid = "invalid_consentid"
}

export enum Prfnd400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters"
,    BadRequest = "Bad request"
,    TheFormatParameterIsInvalid = "The format parameter is invalid"
,    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format"
,    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Prfnd400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Prfnd400ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Prfnd400ApplicationJsonErrorDescriptionEnum;
}

export enum Prfnd401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication"
,    InvalidAuthorization = "invalid_authorization"
}

export enum Prfnd401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed"
,    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Prfnd401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Prfnd401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Prfnd401ApplicationJsonErrorDescriptionEnum;
}

export enum Prfnd404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found"
,    UrlNotFound = "url_not_found"
}

export enum Prfnd404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found"
,    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Prfnd404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Prfnd404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Prfnd404ApplicationJsonErrorDescriptionEnum;
}

export enum Prfnd500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Prfnd500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Prfnd500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Prfnd500ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Prfnd500ApplicationJsonErrorDescriptionEnum;
}

export enum Prfnd502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Prfnd502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Prfnd502ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Prfnd502ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Prfnd502ApplicationJsonErrorDescriptionEnum;
}

export enum Prfnd503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Prfnd503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Prfnd503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Prfnd503ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Prfnd503ApplicationJsonErrorDescriptionEnum;
}

export enum Prfnd504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Prfnd504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Prfnd504ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Prfnd504ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Prfnd504ApplicationJsonErrorDescriptionEnum;
}


export class PrfndResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  prfnd400ApplicationJsonObject?: Prfnd400ApplicationJson;

  @Metadata()
  prfnd401ApplicationJsonObject?: Prfnd401ApplicationJson;

  @Metadata()
  prfnd404ApplicationJsonObject?: Prfnd404ApplicationJson;

  @Metadata()
  prfnd500ApplicationJsonObject?: Prfnd500ApplicationJson;

  @Metadata()
  prfnd502ApplicationJsonObject?: Prfnd502ApplicationJson;

  @Metadata()
  prfnd503ApplicationJsonObject?: Prfnd503ApplicationJson;

  @Metadata()
  prfnd504ApplicationJsonObject?: Prfnd504ApplicationJson;
}
