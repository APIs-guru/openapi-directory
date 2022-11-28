import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RsbycRequestBodyCertificateParameters extends SpeakeasyBase {
    uid: string;
}
export declare enum RsbycRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class RsbycRequestBody extends SpeakeasyBase {
    certificateParameters?: RsbycRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: RsbycRequestBodyFormatEnum;
    txnId: string;
}
export declare class RsbycSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Rsbyc400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Rsbyc400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Rsbyc400ApplicationJson extends SpeakeasyBase {
    error?: Rsbyc400ApplicationJsonErrorEnum;
    errorDescription?: Rsbyc400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Rsbyc401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Rsbyc401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Rsbyc401ApplicationJson extends SpeakeasyBase {
    error?: Rsbyc401ApplicationJsonErrorEnum;
    errorDescription?: Rsbyc401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Rsbyc404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Rsbyc404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Rsbyc404ApplicationJson extends SpeakeasyBase {
    error?: Rsbyc404ApplicationJsonErrorEnum;
    errorDescription?: Rsbyc404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Rsbyc500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Rsbyc500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Rsbyc500ApplicationJson extends SpeakeasyBase {
    error?: Rsbyc500ApplicationJsonErrorEnum;
    errorDescription?: Rsbyc500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Rsbyc502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Rsbyc502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Rsbyc502ApplicationJson extends SpeakeasyBase {
    error?: Rsbyc502ApplicationJsonErrorEnum;
    errorDescription?: Rsbyc502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Rsbyc503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Rsbyc503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Rsbyc503ApplicationJson extends SpeakeasyBase {
    error?: Rsbyc503ApplicationJsonErrorEnum;
    errorDescription?: Rsbyc503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Rsbyc504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Rsbyc504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Rsbyc504ApplicationJson extends SpeakeasyBase {
    error?: Rsbyc504ApplicationJsonErrorEnum;
    errorDescription?: Rsbyc504ApplicationJsonErrorDescriptionEnum;
}
export declare class RsbycRequest extends SpeakeasyBase {
    request?: RsbycRequestBody;
    security: RsbycSecurity;
}
export declare class RsbycResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rsbyc400ApplicationJsonObject?: Rsbyc400ApplicationJson;
    rsbyc401ApplicationJsonObject?: Rsbyc401ApplicationJson;
    rsbyc404ApplicationJsonObject?: Rsbyc404ApplicationJson;
    rsbyc500ApplicationJsonObject?: Rsbyc500ApplicationJson;
    rsbyc502ApplicationJsonObject?: Rsbyc502ApplicationJson;
    rsbyc503ApplicationJsonObject?: Rsbyc503ApplicationJson;
    rsbyc504ApplicationJsonObject?: Rsbyc504ApplicationJson;
}
