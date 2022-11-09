import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MnrgaRequestBodyCertificateParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=UDF1" })
  udf1: string;
}

export enum MnrgaRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class MnrgaRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateParameters" })
  certificateParameters?: MnrgaRequestBodyCertificateParameters;

  @Metadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @Metadata({ data: "json, name=format" })
  format: MnrgaRequestBodyFormatEnum;

  @Metadata({ data: "json, name=txnId" })
  txnId: string;
}


export class MnrgaSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class MnrgaRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: MnrgaRequestBody;

  @Metadata()
  security: MnrgaSecurity;
}

export enum Mnrga400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter"
,    InvalidParameter = "invalid_parameter"
,    InvalidFormat = "invalid_format"
,    InvalidTxnid = "invalid_txnid"
,    InvalidConsentid = "invalid_consentid"
}

export enum Mnrga400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters"
,    BadRequest = "Bad request"
,    TheFormatParameterIsInvalid = "The format parameter is invalid"
,    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format"
,    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Mnrga400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Mnrga400ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Mnrga400ApplicationJsonErrorDescriptionEnum;
}

export enum Mnrga401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication"
,    InvalidAuthorization = "invalid_authorization"
}

export enum Mnrga401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed"
,    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Mnrga401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Mnrga401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Mnrga401ApplicationJsonErrorDescriptionEnum;
}

export enum Mnrga404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found"
,    UrlNotFound = "url_not_found"
}

export enum Mnrga404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found"
,    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Mnrga404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Mnrga404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Mnrga404ApplicationJsonErrorDescriptionEnum;
}

export enum Mnrga500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Mnrga500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Mnrga500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Mnrga500ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Mnrga500ApplicationJsonErrorDescriptionEnum;
}

export enum Mnrga502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Mnrga502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Mnrga502ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Mnrga502ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Mnrga502ApplicationJsonErrorDescriptionEnum;
}

export enum Mnrga503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Mnrga503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Mnrga503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Mnrga503ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Mnrga503ApplicationJsonErrorDescriptionEnum;
}

export enum Mnrga504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Mnrga504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Mnrga504ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Mnrga504ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Mnrga504ApplicationJsonErrorDescriptionEnum;
}


export class MnrgaResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  mnrga400ApplicationJsonObject?: Mnrga400ApplicationJson;

  @Metadata()
  mnrga401ApplicationJsonObject?: Mnrga401ApplicationJson;

  @Metadata()
  mnrga404ApplicationJsonObject?: Mnrga404ApplicationJson;

  @Metadata()
  mnrga500ApplicationJsonObject?: Mnrga500ApplicationJson;

  @Metadata()
  mnrga502ApplicationJsonObject?: Mnrga502ApplicationJson;

  @Metadata()
  mnrga503ApplicationJsonObject?: Mnrga503ApplicationJson;

  @Metadata()
  mnrga504ApplicationJsonObject?: Mnrga504ApplicationJson;
}
