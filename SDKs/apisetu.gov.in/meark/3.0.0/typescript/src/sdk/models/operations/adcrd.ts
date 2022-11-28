import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AdcrdRequestBodyCertificateParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DOB" })
  dob: string;

  @SpeakeasyMetadata({ data: "json, name=PrnNo" })
  prnNo: string;

  @SpeakeasyMetadata({ data: "json, name=RequestId" })
  requestId: string;
}

export enum AdcrdRequestBodyFormatEnum {
    Xml = "xml",
    Pdf = "pdf"
}


export class AdcrdRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateParameters" })
  certificateParameters?: AdcrdRequestBodyCertificateParameters;

  @SpeakeasyMetadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: AdcrdRequestBodyFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=txnId" })
  txnId: string;
}


export class AdcrdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}

export enum Adcrd400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}

export enum Adcrd400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Adcrd400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Adcrd400ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Adcrd400ApplicationJsonErrorDescriptionEnum;
}

export enum Adcrd401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}

export enum Adcrd401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Adcrd401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Adcrd401ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Adcrd401ApplicationJsonErrorDescriptionEnum;
}

export enum Adcrd404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}

export enum Adcrd404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Adcrd404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Adcrd404ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Adcrd404ApplicationJsonErrorDescriptionEnum;
}

export enum Adcrd500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Adcrd500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Adcrd500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Adcrd500ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Adcrd500ApplicationJsonErrorDescriptionEnum;
}

export enum Adcrd502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Adcrd502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Adcrd502ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Adcrd502ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Adcrd502ApplicationJsonErrorDescriptionEnum;
}

export enum Adcrd503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Adcrd503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Adcrd503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Adcrd503ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Adcrd503ApplicationJsonErrorDescriptionEnum;
}

export enum Adcrd504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Adcrd504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Adcrd504ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Adcrd504ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Adcrd504ApplicationJsonErrorDescriptionEnum;
}


export class AdcrdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: AdcrdRequestBody;

  @SpeakeasyMetadata()
  security: AdcrdSecurity;
}


export class AdcrdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  adcrd400ApplicationJsonObject?: Adcrd400ApplicationJson;

  @SpeakeasyMetadata()
  adcrd401ApplicationJsonObject?: Adcrd401ApplicationJson;

  @SpeakeasyMetadata()
  adcrd404ApplicationJsonObject?: Adcrd404ApplicationJson;

  @SpeakeasyMetadata()
  adcrd500ApplicationJsonObject?: Adcrd500ApplicationJson;

  @SpeakeasyMetadata()
  adcrd502ApplicationJsonObject?: Adcrd502ApplicationJson;

  @SpeakeasyMetadata()
  adcrd503ApplicationJsonObject?: Adcrd503ApplicationJson;

  @SpeakeasyMetadata()
  adcrd504ApplicationJsonObject?: Adcrd504ApplicationJson;
}
