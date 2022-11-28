import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class VhtaxRequestBodyCertificateParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FullName" })
  fullName: string;

  @SpeakeasyMetadata({ data: "json, name=UID" })
  uid: string;

  @SpeakeasyMetadata({ data: "json, name=chasis_no" })
  chasisNo: string;

  @SpeakeasyMetadata({ data: "json, name=reg_no" })
  regNo: string;

  @SpeakeasyMetadata({ data: "json, name=swd_name" })
  swdName: string;
}

export enum VhtaxRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class VhtaxRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateParameters" })
  certificateParameters?: VhtaxRequestBodyCertificateParameters;

  @SpeakeasyMetadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: VhtaxRequestBodyFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=txnId" })
  txnId: string;
}


export class VhtaxSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}

export enum Vhtax400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}

export enum Vhtax400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Vhtax400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Vhtax400ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Vhtax400ApplicationJsonErrorDescriptionEnum;
}

export enum Vhtax401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}

export enum Vhtax401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Vhtax401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Vhtax401ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Vhtax401ApplicationJsonErrorDescriptionEnum;
}

export enum Vhtax404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}

export enum Vhtax404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Vhtax404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Vhtax404ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Vhtax404ApplicationJsonErrorDescriptionEnum;
}

export enum Vhtax500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Vhtax500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Vhtax500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Vhtax500ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Vhtax500ApplicationJsonErrorDescriptionEnum;
}

export enum Vhtax502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Vhtax502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Vhtax502ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Vhtax502ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Vhtax502ApplicationJsonErrorDescriptionEnum;
}

export enum Vhtax503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Vhtax503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Vhtax503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Vhtax503ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Vhtax503ApplicationJsonErrorDescriptionEnum;
}

export enum Vhtax504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Vhtax504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Vhtax504ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Vhtax504ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Vhtax504ApplicationJsonErrorDescriptionEnum;
}


export class VhtaxRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: VhtaxRequestBody;

  @SpeakeasyMetadata()
  security: VhtaxSecurity;
}


export class VhtaxResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  vhtax400ApplicationJsonObject?: Vhtax400ApplicationJson;

  @SpeakeasyMetadata()
  vhtax401ApplicationJsonObject?: Vhtax401ApplicationJson;

  @SpeakeasyMetadata()
  vhtax404ApplicationJsonObject?: Vhtax404ApplicationJson;

  @SpeakeasyMetadata()
  vhtax500ApplicationJsonObject?: Vhtax500ApplicationJson;

  @SpeakeasyMetadata()
  vhtax502ApplicationJsonObject?: Vhtax502ApplicationJson;

  @SpeakeasyMetadata()
  vhtax503ApplicationJsonObject?: Vhtax503ApplicationJson;

  @SpeakeasyMetadata()
  vhtax504ApplicationJsonObject?: Vhtax504ApplicationJson;
}
