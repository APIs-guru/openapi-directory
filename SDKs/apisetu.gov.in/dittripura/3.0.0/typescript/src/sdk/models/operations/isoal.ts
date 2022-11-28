import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class IsoalRequestBodyCertificateParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RefNo" })
  refNo: string;

  @SpeakeasyMetadata({ data: "json, name=TokenNo" })
  tokenNo: string;
}

export enum IsoalRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class IsoalRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateParameters" })
  certificateParameters?: IsoalRequestBodyCertificateParameters;

  @SpeakeasyMetadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: IsoalRequestBodyFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=txnId" })
  txnId: string;
}


export class IsoalSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}

export enum Isoal400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}

export enum Isoal400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Isoal400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Isoal400ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Isoal400ApplicationJsonErrorDescriptionEnum;
}

export enum Isoal401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}

export enum Isoal401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Isoal401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Isoal401ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Isoal401ApplicationJsonErrorDescriptionEnum;
}

export enum Isoal404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}

export enum Isoal404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Isoal404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Isoal404ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Isoal404ApplicationJsonErrorDescriptionEnum;
}

export enum Isoal500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Isoal500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Isoal500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Isoal500ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Isoal500ApplicationJsonErrorDescriptionEnum;
}

export enum Isoal502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Isoal502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Isoal502ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Isoal502ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Isoal502ApplicationJsonErrorDescriptionEnum;
}

export enum Isoal503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Isoal503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Isoal503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Isoal503ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Isoal503ApplicationJsonErrorDescriptionEnum;
}

export enum Isoal504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Isoal504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Isoal504ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Isoal504ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Isoal504ApplicationJsonErrorDescriptionEnum;
}


export class IsoalRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: IsoalRequestBody;

  @SpeakeasyMetadata()
  security: IsoalSecurity;
}


export class IsoalResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  isoal400ApplicationJsonObject?: Isoal400ApplicationJson;

  @SpeakeasyMetadata()
  isoal401ApplicationJsonObject?: Isoal401ApplicationJson;

  @SpeakeasyMetadata()
  isoal404ApplicationJsonObject?: Isoal404ApplicationJson;

  @SpeakeasyMetadata()
  isoal500ApplicationJsonObject?: Isoal500ApplicationJson;

  @SpeakeasyMetadata()
  isoal502ApplicationJsonObject?: Isoal502ApplicationJson;

  @SpeakeasyMetadata()
  isoal503ApplicationJsonObject?: Isoal503ApplicationJson;

  @SpeakeasyMetadata()
  isoal504ApplicationJsonObject?: Isoal504ApplicationJson;
}
