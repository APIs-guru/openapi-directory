import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class LlcerRequestBodyCertificateParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=UDF1" })
  udf1: string;

  @Metadata({ data: "json, name=UDF2" })
  udf2: string;

  @Metadata({ data: "json, name=UDF3" })
  udf3: string;
}

export enum LlcerRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class LlcerRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateParameters" })
  certificateParameters?: LlcerRequestBodyCertificateParameters;

  @Metadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @Metadata({ data: "json, name=format" })
  format: LlcerRequestBodyFormatEnum;

  @Metadata({ data: "json, name=txnId" })
  txnId: string;
}


export class LlcerSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class LlcerRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: LlcerRequestBody;

  @Metadata()
  security: LlcerSecurity;
}

export enum Llcer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter"
,    InvalidParameter = "invalid_parameter"
,    InvalidFormat = "invalid_format"
,    InvalidTxnid = "invalid_txnid"
,    InvalidConsentid = "invalid_consentid"
}

export enum Llcer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters"
,    BadRequest = "Bad request"
,    TheFormatParameterIsInvalid = "The format parameter is invalid"
,    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format"
,    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Llcer400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Llcer400ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Llcer400ApplicationJsonErrorDescriptionEnum;
}

export enum Llcer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication"
,    InvalidAuthorization = "invalid_authorization"
}

export enum Llcer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed"
,    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Llcer401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Llcer401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Llcer401ApplicationJsonErrorDescriptionEnum;
}

export enum Llcer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found"
,    UrlNotFound = "url_not_found"
}

export enum Llcer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found"
,    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Llcer404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Llcer404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Llcer404ApplicationJsonErrorDescriptionEnum;
}

export enum Llcer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Llcer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Llcer500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Llcer500ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Llcer500ApplicationJsonErrorDescriptionEnum;
}

export enum Llcer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Llcer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Llcer502ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Llcer502ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Llcer502ApplicationJsonErrorDescriptionEnum;
}

export enum Llcer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Llcer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Llcer503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Llcer503ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Llcer503ApplicationJsonErrorDescriptionEnum;
}

export enum Llcer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Llcer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Llcer504ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Llcer504ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Llcer504ApplicationJsonErrorDescriptionEnum;
}


export class LlcerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  llcer400ApplicationJsonObject?: Llcer400ApplicationJson;

  @Metadata()
  llcer401ApplicationJsonObject?: Llcer401ApplicationJson;

  @Metadata()
  llcer404ApplicationJsonObject?: Llcer404ApplicationJson;

  @Metadata()
  llcer500ApplicationJsonObject?: Llcer500ApplicationJson;

  @Metadata()
  llcer502ApplicationJsonObject?: Llcer502ApplicationJson;

  @Metadata()
  llcer503ApplicationJsonObject?: Llcer503ApplicationJson;

  @Metadata()
  llcer504ApplicationJsonObject?: Llcer504ApplicationJson;
}
