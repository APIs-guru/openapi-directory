import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class LpgsvRequestBodyCertificateParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LPGID" })
  lpgid: string;

  @SpeakeasyMetadata({ data: "json, name=SVID" })
  svid: string;
}

export enum LpgsvRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class LpgsvRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateParameters" })
  certificateParameters?: LpgsvRequestBodyCertificateParameters;

  @SpeakeasyMetadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: LpgsvRequestBodyFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=txnId" })
  txnId: string;
}


export class LpgsvSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}

export enum Lpgsv400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}

export enum Lpgsv400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Lpgsv400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Lpgsv400ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Lpgsv400ApplicationJsonErrorDescriptionEnum;
}

export enum Lpgsv401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}

export enum Lpgsv401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Lpgsv401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Lpgsv401ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Lpgsv401ApplicationJsonErrorDescriptionEnum;
}

export enum Lpgsv404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}

export enum Lpgsv404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Lpgsv404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Lpgsv404ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Lpgsv404ApplicationJsonErrorDescriptionEnum;
}

export enum Lpgsv500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Lpgsv500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Lpgsv500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Lpgsv500ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Lpgsv500ApplicationJsonErrorDescriptionEnum;
}

export enum Lpgsv502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Lpgsv502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Lpgsv502ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Lpgsv502ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Lpgsv502ApplicationJsonErrorDescriptionEnum;
}

export enum Lpgsv503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Lpgsv503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Lpgsv503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Lpgsv503ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Lpgsv503ApplicationJsonErrorDescriptionEnum;
}

export enum Lpgsv504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Lpgsv504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Lpgsv504ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Lpgsv504ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Lpgsv504ApplicationJsonErrorDescriptionEnum;
}


export class LpgsvRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: LpgsvRequestBody;

  @SpeakeasyMetadata()
  security: LpgsvSecurity;
}


export class LpgsvResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  lpgsv400ApplicationJsonObject?: Lpgsv400ApplicationJson;

  @SpeakeasyMetadata()
  lpgsv401ApplicationJsonObject?: Lpgsv401ApplicationJson;

  @SpeakeasyMetadata()
  lpgsv404ApplicationJsonObject?: Lpgsv404ApplicationJson;

  @SpeakeasyMetadata()
  lpgsv500ApplicationJsonObject?: Lpgsv500ApplicationJson;

  @SpeakeasyMetadata()
  lpgsv502ApplicationJsonObject?: Lpgsv502ApplicationJson;

  @SpeakeasyMetadata()
  lpgsv503ApplicationJsonObject?: Lpgsv503ApplicationJson;

  @SpeakeasyMetadata()
  lpgsv504ApplicationJsonObject?: Lpgsv504ApplicationJson;
}
