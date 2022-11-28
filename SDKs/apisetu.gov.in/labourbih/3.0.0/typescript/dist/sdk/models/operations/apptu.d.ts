import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApptuRequestBodyCertificateParameters extends SpeakeasyBase {
    refNo: string;
    tokenNo: string;
}
export declare enum ApptuRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class ApptuRequestBody extends SpeakeasyBase {
    certificateParameters?: ApptuRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: ApptuRequestBodyFormatEnum;
    txnId: string;
}
export declare class ApptuSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Apptu400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Apptu400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Apptu400ApplicationJson extends SpeakeasyBase {
    error?: Apptu400ApplicationJsonErrorEnum;
    errorDescription?: Apptu400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Apptu401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Apptu401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Apptu401ApplicationJson extends SpeakeasyBase {
    error?: Apptu401ApplicationJsonErrorEnum;
    errorDescription?: Apptu401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Apptu404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Apptu404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Apptu404ApplicationJson extends SpeakeasyBase {
    error?: Apptu404ApplicationJsonErrorEnum;
    errorDescription?: Apptu404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Apptu500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Apptu500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Apptu500ApplicationJson extends SpeakeasyBase {
    error?: Apptu500ApplicationJsonErrorEnum;
    errorDescription?: Apptu500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Apptu502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Apptu502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Apptu502ApplicationJson extends SpeakeasyBase {
    error?: Apptu502ApplicationJsonErrorEnum;
    errorDescription?: Apptu502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Apptu503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Apptu503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Apptu503ApplicationJson extends SpeakeasyBase {
    error?: Apptu503ApplicationJsonErrorEnum;
    errorDescription?: Apptu503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Apptu504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Apptu504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Apptu504ApplicationJson extends SpeakeasyBase {
    error?: Apptu504ApplicationJsonErrorEnum;
    errorDescription?: Apptu504ApplicationJsonErrorDescriptionEnum;
}
export declare class ApptuRequest extends SpeakeasyBase {
    request?: ApptuRequestBody;
    security: ApptuSecurity;
}
export declare class ApptuResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apptu400ApplicationJsonObject?: Apptu400ApplicationJson;
    apptu401ApplicationJsonObject?: Apptu401ApplicationJson;
    apptu404ApplicationJsonObject?: Apptu404ApplicationJson;
    apptu500ApplicationJsonObject?: Apptu500ApplicationJson;
    apptu502ApplicationJsonObject?: Apptu502ApplicationJson;
    apptu503ApplicationJsonObject?: Apptu503ApplicationJson;
    apptu504ApplicationJsonObject?: Apptu504ApplicationJson;
}
