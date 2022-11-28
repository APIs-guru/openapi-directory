import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class VochseRequestBodyCertificateParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DOB" })
  dob: string;

  @SpeakeasyMetadata({ data: "json, name=FullName" })
  fullName: string;

  @SpeakeasyMetadata({ data: "json, name=Regno" })
  regno: string;

  @SpeakeasyMetadata({ data: "json, name=Year" })
  year: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}

export enum VochseRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class VochseRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateParameters" })
  certificateParameters?: VochseRequestBodyCertificateParameters;

  @SpeakeasyMetadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: VochseRequestBodyFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=txnId" })
  txnId: string;
}


export class VochseSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}

export enum Vochse400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}

export enum Vochse400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Vochse400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Vochse400ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Vochse400ApplicationJsonErrorDescriptionEnum;
}

export enum Vochse401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}

export enum Vochse401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Vochse401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Vochse401ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Vochse401ApplicationJsonErrorDescriptionEnum;
}

export enum Vochse404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}

export enum Vochse404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Vochse404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Vochse404ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Vochse404ApplicationJsonErrorDescriptionEnum;
}

export enum Vochse500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Vochse500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Vochse500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Vochse500ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Vochse500ApplicationJsonErrorDescriptionEnum;
}

export enum Vochse502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Vochse502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Vochse502ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Vochse502ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Vochse502ApplicationJsonErrorDescriptionEnum;
}

export enum Vochse503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Vochse503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Vochse503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Vochse503ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Vochse503ApplicationJsonErrorDescriptionEnum;
}

export enum Vochse504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Vochse504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Vochse504ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Vochse504ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Vochse504ApplicationJsonErrorDescriptionEnum;
}


export class VochseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: VochseRequestBody;

  @SpeakeasyMetadata()
  security: VochseSecurity;
}


export class VochseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  vochse400ApplicationJsonObject?: Vochse400ApplicationJson;

  @SpeakeasyMetadata()
  vochse401ApplicationJsonObject?: Vochse401ApplicationJson;

  @SpeakeasyMetadata()
  vochse404ApplicationJsonObject?: Vochse404ApplicationJson;

  @SpeakeasyMetadata()
  vochse500ApplicationJsonObject?: Vochse500ApplicationJson;

  @SpeakeasyMetadata()
  vochse502ApplicationJsonObject?: Vochse502ApplicationJson;

  @SpeakeasyMetadata()
  vochse503ApplicationJsonObject?: Vochse503ApplicationJson;

  @SpeakeasyMetadata()
  vochse504ApplicationJsonObject?: Vochse504ApplicationJson;
}
