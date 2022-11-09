import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IsoalRequestBodyCertificateParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=RefNo" })
  refNo: string;

  @Metadata({ data: "json, name=TokenNo" })
  tokenNo: string;
}

export enum IsoalRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class IsoalRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateParameters" })
  certificateParameters?: IsoalRequestBodyCertificateParameters;

  @Metadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @Metadata({ data: "json, name=format" })
  format: IsoalRequestBodyFormatEnum;

  @Metadata({ data: "json, name=txnId" })
  txnId: string;
}


export class IsoalSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class IsoalRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: IsoalRequestBody;

  @Metadata()
  security: IsoalSecurity;
}

export enum Isoal400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter"
,    InvalidParameter = "invalid_parameter"
,    InvalidFormat = "invalid_format"
,    InvalidTxnid = "invalid_txnid"
,    InvalidConsentid = "invalid_consentid"
}

export enum Isoal400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters"
,    BadRequest = "Bad request"
,    TheFormatParameterIsInvalid = "The format parameter is invalid"
,    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format"
,    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Isoal400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Isoal400ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Isoal400ApplicationJsonErrorDescriptionEnum;
}

export enum Isoal401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication"
,    InvalidAuthorization = "invalid_authorization"
}

export enum Isoal401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed"
,    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Isoal401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Isoal401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Isoal401ApplicationJsonErrorDescriptionEnum;
}

export enum Isoal404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found"
,    UrlNotFound = "url_not_found"
}

export enum Isoal404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found"
,    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Isoal404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Isoal404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Isoal404ApplicationJsonErrorDescriptionEnum;
}

export enum Isoal500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Isoal500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Isoal500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Isoal500ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Isoal500ApplicationJsonErrorDescriptionEnum;
}

export enum Isoal502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Isoal502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Isoal502ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Isoal502ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Isoal502ApplicationJsonErrorDescriptionEnum;
}

export enum Isoal503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Isoal503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Isoal503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Isoal503ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Isoal503ApplicationJsonErrorDescriptionEnum;
}

export enum Isoal504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Isoal504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Isoal504ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Isoal504ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Isoal504ApplicationJsonErrorDescriptionEnum;
}


export class IsoalResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  isoal400ApplicationJsonObject?: Isoal400ApplicationJson;

  @Metadata()
  isoal401ApplicationJsonObject?: Isoal401ApplicationJson;

  @Metadata()
  isoal404ApplicationJsonObject?: Isoal404ApplicationJson;

  @Metadata()
  isoal500ApplicationJsonObject?: Isoal500ApplicationJson;

  @Metadata()
  isoal502ApplicationJsonObject?: Isoal502ApplicationJson;

  @Metadata()
  isoal503ApplicationJsonObject?: Isoal503ApplicationJson;

  @Metadata()
  isoal504ApplicationJsonObject?: Isoal504ApplicationJson;
}
