import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SslcrRequestBodyCertificateParameters extends SpeakeasyBase {
    dob: string;
    fullName: string;
    uid: string;
    regno: string;
    year: string;
}
export declare enum SslcrRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class SslcrRequestBody extends SpeakeasyBase {
    certificateParameters?: SslcrRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: SslcrRequestBodyFormatEnum;
    txnId: string;
}
export declare class SslcrSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Sslcr400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Sslcr400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Sslcr400ApplicationJson extends SpeakeasyBase {
    error?: Sslcr400ApplicationJsonErrorEnum;
    errorDescription?: Sslcr400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Sslcr401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Sslcr401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Sslcr401ApplicationJson extends SpeakeasyBase {
    error?: Sslcr401ApplicationJsonErrorEnum;
    errorDescription?: Sslcr401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Sslcr404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Sslcr404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Sslcr404ApplicationJson extends SpeakeasyBase {
    error?: Sslcr404ApplicationJsonErrorEnum;
    errorDescription?: Sslcr404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Sslcr500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Sslcr500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Sslcr500ApplicationJson extends SpeakeasyBase {
    error?: Sslcr500ApplicationJsonErrorEnum;
    errorDescription?: Sslcr500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Sslcr502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Sslcr502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Sslcr502ApplicationJson extends SpeakeasyBase {
    error?: Sslcr502ApplicationJsonErrorEnum;
    errorDescription?: Sslcr502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Sslcr503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Sslcr503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Sslcr503ApplicationJson extends SpeakeasyBase {
    error?: Sslcr503ApplicationJsonErrorEnum;
    errorDescription?: Sslcr503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Sslcr504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Sslcr504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Sslcr504ApplicationJson extends SpeakeasyBase {
    error?: Sslcr504ApplicationJsonErrorEnum;
    errorDescription?: Sslcr504ApplicationJsonErrorDescriptionEnum;
}
export declare class SslcrRequest extends SpeakeasyBase {
    request?: SslcrRequestBody;
    security: SslcrSecurity;
}
export declare class SslcrResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    sslcr400ApplicationJsonObject?: Sslcr400ApplicationJson;
    sslcr401ApplicationJsonObject?: Sslcr401ApplicationJson;
    sslcr404ApplicationJsonObject?: Sslcr404ApplicationJson;
    sslcr500ApplicationJsonObject?: Sslcr500ApplicationJson;
    sslcr502ApplicationJsonObject?: Sslcr502ApplicationJson;
    sslcr503ApplicationJsonObject?: Sslcr503ApplicationJson;
    sslcr504ApplicationJsonObject?: Sslcr504ApplicationJson;
}
