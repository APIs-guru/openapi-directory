import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SslcsRequestBodyCertificateParameters extends SpeakeasyBase {
    refNo: string;
    tokenNo: string;
}
export declare enum SslcsRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class SslcsRequestBody extends SpeakeasyBase {
    certificateParameters?: SslcsRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: SslcsRequestBodyFormatEnum;
    txnId: string;
}
export declare class SslcsSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Sslcs400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Sslcs400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Sslcs400ApplicationJson extends SpeakeasyBase {
    error?: Sslcs400ApplicationJsonErrorEnum;
    errorDescription?: Sslcs400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Sslcs401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Sslcs401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Sslcs401ApplicationJson extends SpeakeasyBase {
    error?: Sslcs401ApplicationJsonErrorEnum;
    errorDescription?: Sslcs401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Sslcs404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Sslcs404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Sslcs404ApplicationJson extends SpeakeasyBase {
    error?: Sslcs404ApplicationJsonErrorEnum;
    errorDescription?: Sslcs404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Sslcs500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Sslcs500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Sslcs500ApplicationJson extends SpeakeasyBase {
    error?: Sslcs500ApplicationJsonErrorEnum;
    errorDescription?: Sslcs500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Sslcs502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Sslcs502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Sslcs502ApplicationJson extends SpeakeasyBase {
    error?: Sslcs502ApplicationJsonErrorEnum;
    errorDescription?: Sslcs502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Sslcs503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Sslcs503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Sslcs503ApplicationJson extends SpeakeasyBase {
    error?: Sslcs503ApplicationJsonErrorEnum;
    errorDescription?: Sslcs503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Sslcs504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Sslcs504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Sslcs504ApplicationJson extends SpeakeasyBase {
    error?: Sslcs504ApplicationJsonErrorEnum;
    errorDescription?: Sslcs504ApplicationJsonErrorDescriptionEnum;
}
export declare class SslcsRequest extends SpeakeasyBase {
    request?: SslcsRequestBody;
    security: SslcsSecurity;
}
export declare class SslcsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    sslcs400ApplicationJsonObject?: Sslcs400ApplicationJson;
    sslcs401ApplicationJsonObject?: Sslcs401ApplicationJson;
    sslcs404ApplicationJsonObject?: Sslcs404ApplicationJson;
    sslcs500ApplicationJsonObject?: Sslcs500ApplicationJson;
    sslcs502ApplicationJsonObject?: Sslcs502ApplicationJson;
    sslcs503ApplicationJsonObject?: Sslcs503ApplicationJson;
    sslcs504ApplicationJsonObject?: Sslcs504ApplicationJson;
}
