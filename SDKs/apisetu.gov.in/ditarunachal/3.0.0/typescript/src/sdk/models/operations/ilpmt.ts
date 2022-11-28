import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class IlpmtRequestBodyCertificateParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FullName" })
  fullName: string;

  @SpeakeasyMetadata({ data: "json, name=UID" })
  uid: string;

  @SpeakeasyMetadata({ data: "json, name=eILPAppId" })
  eIlpAppId: string;

  @SpeakeasyMetadata({ data: "json, name=eILPContactNumber" })
  eIlpContactNumber: string;
}

export enum IlpmtRequestBodyFormatEnum {
    Pdf = "pdf"
}


export class IlpmtRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateParameters" })
  certificateParameters?: IlpmtRequestBodyCertificateParameters;

  @SpeakeasyMetadata({ data: "json, name=consentArtifact" })
  consentArtifact?: any;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: IlpmtRequestBodyFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=txnId" })
  txnId: string;
}


export class IlpmtSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId: shared.SchemeClientId;
}

export enum Ilpmt400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}

export enum Ilpmt400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}


export class Ilpmt400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Ilpmt400ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Ilpmt400ApplicationJsonErrorDescriptionEnum;
}

export enum Ilpmt401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}

export enum Ilpmt401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class Ilpmt401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Ilpmt401ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Ilpmt401ApplicationJsonErrorDescriptionEnum;
}

export enum Ilpmt404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}

export enum Ilpmt404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}


export class Ilpmt404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Ilpmt404ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Ilpmt404ApplicationJsonErrorDescriptionEnum;
}

export enum Ilpmt500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum Ilpmt500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class Ilpmt500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Ilpmt500ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Ilpmt500ApplicationJsonErrorDescriptionEnum;
}

export enum Ilpmt502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}

export enum Ilpmt502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}


export class Ilpmt502ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Ilpmt502ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Ilpmt502ApplicationJsonErrorDescriptionEnum;
}

export enum Ilpmt503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum Ilpmt503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class Ilpmt503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Ilpmt503ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Ilpmt503ApplicationJsonErrorDescriptionEnum;
}

export enum Ilpmt504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum Ilpmt504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class Ilpmt504ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Ilpmt504ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: Ilpmt504ApplicationJsonErrorDescriptionEnum;
}


export class IlpmtRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: IlpmtRequestBody;

  @SpeakeasyMetadata()
  security: IlpmtSecurity;
}


export class IlpmtResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  ilpmt400ApplicationJsonObject?: Ilpmt400ApplicationJson;

  @SpeakeasyMetadata()
  ilpmt401ApplicationJsonObject?: Ilpmt401ApplicationJson;

  @SpeakeasyMetadata()
  ilpmt404ApplicationJsonObject?: Ilpmt404ApplicationJson;

  @SpeakeasyMetadata()
  ilpmt500ApplicationJsonObject?: Ilpmt500ApplicationJson;

  @SpeakeasyMetadata()
  ilpmt502ApplicationJsonObject?: Ilpmt502ApplicationJson;

  @SpeakeasyMetadata()
  ilpmt503ApplicationJsonObject?: Ilpmt503ApplicationJson;

  @SpeakeasyMetadata()
  ilpmt504ApplicationJsonObject?: Ilpmt504ApplicationJson;
}
