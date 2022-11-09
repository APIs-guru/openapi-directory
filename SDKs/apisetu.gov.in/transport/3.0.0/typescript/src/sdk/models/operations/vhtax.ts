import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class VhtaxRequestBodyCertificateParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=FullName" })
  fullName: string;

  @Metadata({ data: "json, name=UID" })
  uid: string;

  @Metadata({ data: "json, name=chasis_no" })
  chasisNo: string;

  @Metadata({ data: "json, name=reg_no" })
  regNo: string;

  @Metadata({ data: "json, name=swd_name" })
  swdName: string;
}

export enum VhtaxRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class VhtaxRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateParameters" })
  certificateParameters?: VhtaxRequestBodyCertificateParameters;

  @Metadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @Metadata({ data: "json, name=format" })
  format: VhtaxRequestBodyFormatEnum;

  @Metadata({ data: "json, name=txnId" })
  txnId: string;
}


export class VhtaxSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}


export class VhtaxRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: VhtaxRequestBody;

  @Metadata()
  security: VhtaxSecurity;
}

export enum Vhtax400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter"
,    InvalidParameter = "invalid_parameter"
,    InvalidFormat = "invalid_format"
,    InvalidTxnid = "invalid_txnid"
,    InvalidConsentid = "invalid_consentid"
}

export enum Vhtax400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters"
,    BadRequest = "Bad request"
,    TheFormatParameterIsInvalid = "The format parameter is invalid"
,    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format"
,    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Vhtax400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Vhtax400ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Vhtax400ApplicationJsonErrorDescriptionEnum;
}

export enum Vhtax401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication"
,    InvalidAuthorization = "invalid_authorization"
}

export enum Vhtax401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed"
,    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Vhtax401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Vhtax401ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Vhtax401ApplicationJsonErrorDescriptionEnum;
}

export enum Vhtax404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found"
,    UrlNotFound = "url_not_found"
}

export enum Vhtax404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found"
,    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Vhtax404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Vhtax404ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Vhtax404ApplicationJsonErrorDescriptionEnum;
}

export enum Vhtax500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Vhtax500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Vhtax500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Vhtax500ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Vhtax500ApplicationJsonErrorDescriptionEnum;
}

export enum Vhtax502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Vhtax502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Vhtax502ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Vhtax502ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Vhtax502ApplicationJsonErrorDescriptionEnum;
}

export enum Vhtax503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Vhtax503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Vhtax503ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Vhtax503ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Vhtax503ApplicationJsonErrorDescriptionEnum;
}

export enum Vhtax504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Vhtax504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Vhtax504ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: Vhtax504ApplicationJsonErrorEnum;

  @Metadata({ data: "json, name=errorDescription" })
  errorDescription?: Vhtax504ApplicationJsonErrorDescriptionEnum;
}


export class VhtaxResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  vhtax400ApplicationJsonObject?: Vhtax400ApplicationJson;

  @Metadata()
  vhtax401ApplicationJsonObject?: Vhtax401ApplicationJson;

  @Metadata()
  vhtax404ApplicationJsonObject?: Vhtax404ApplicationJson;

  @Metadata()
  vhtax500ApplicationJsonObject?: Vhtax500ApplicationJson;

  @Metadata()
  vhtax502ApplicationJsonObject?: Vhtax502ApplicationJson;

  @Metadata()
  vhtax503ApplicationJsonObject?: Vhtax503ApplicationJson;

  @Metadata()
  vhtax504ApplicationJsonObject?: Vhtax504ApplicationJson;
}
