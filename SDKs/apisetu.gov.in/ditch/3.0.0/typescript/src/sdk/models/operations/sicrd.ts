import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SicrdRequestBodyCertificateParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=CERTNO" })
  certno: string;

  @Metadata({ data: "json, name=DOB" })
  dob: string;
}

export enum SicrdRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class SicrdRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateParameters" })
  certificateParameters?: SicrdRequestBodyCertificateParameters;

  @Metadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @Metadata({ data: "json, name=format" })
  format: SicrdRequestBodyFormatEnum;

  @Metadata({ data: "json, name=txnId" })
  txnId: string;
}


export class SicrdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class SicrdRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: SicrdRequestBody;

  @Metadata()
  security: SicrdSecurity;
}

export enum Sicrd400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter"
,    InvalidParameter = "invalid_parameter"
,    InvalidFormat = "invalid_format"
,    InvalidTxnid = "invalid_txnid"
,    InvalidConsentid = "invalid_consentid"
}

export enum Sicrd400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters"
,    BadRequest = "Bad request"
,    TheFormatParameterIsInvalid = "The format parameter is invalid"
,    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format"
,    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Sicrd400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Sicrd400ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Sicrd400ApplicationJsonErrorDescriptionEnum;
}

export enum Sicrd401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication"
,    InvalidAuthorization = "invalid_authorization"
}

export enum Sicrd401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed"
,    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Sicrd401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Sicrd401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Sicrd401ApplicationJsonErrorDescriptionEnum;
}

export enum Sicrd404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found"
,    UrlNotFound = "url_not_found"
}

export enum Sicrd404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found"
,    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Sicrd404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Sicrd404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Sicrd404ApplicationJsonErrorDescriptionEnum;
}

export enum Sicrd500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Sicrd500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Sicrd500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Sicrd500ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Sicrd500ApplicationJsonErrorDescriptionEnum;
}

export enum Sicrd502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Sicrd502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Sicrd502ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Sicrd502ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Sicrd502ApplicationJsonErrorDescriptionEnum;
}

export enum Sicrd503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Sicrd503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Sicrd503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Sicrd503ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Sicrd503ApplicationJsonErrorDescriptionEnum;
}

export enum Sicrd504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Sicrd504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Sicrd504ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Sicrd504ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Sicrd504ApplicationJsonErrorDescriptionEnum;
}


export class SicrdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  sicrd400ApplicationJsonObject?: Sicrd400ApplicationJson;

  @Metadata()
  sicrd401ApplicationJsonObject?: Sicrd401ApplicationJson;

  @Metadata()
  sicrd404ApplicationJsonObject?: Sicrd404ApplicationJson;

  @Metadata()
  sicrd500ApplicationJsonObject?: Sicrd500ApplicationJson;

  @Metadata()
  sicrd502ApplicationJsonObject?: Sicrd502ApplicationJson;

  @Metadata()
  sicrd503ApplicationJsonObject?: Sicrd503ApplicationJson;

  @Metadata()
  sicrd504ApplicationJsonObject?: Sicrd504ApplicationJson;
}
