import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FitcerRequestBodyCertificateParameters extends SpeakeasyBase {
    fullName: string;
    uid: string;
    chasisNo: string;
    regNo: string;
    swdName: string;
}
export declare enum FitcerRequestBodyFormatEnum {
    Xml = "xml",
    Pdf = "pdf"
}
export declare class FitcerRequestBody extends SpeakeasyBase {
    certificateParameters?: FitcerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: FitcerRequestBodyFormatEnum;
    txnId: string;
}
export declare class FitcerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Fitcer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Fitcer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Fitcer400ApplicationJson extends SpeakeasyBase {
    error?: Fitcer400ApplicationJsonErrorEnum;
    errorDescription?: Fitcer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Fitcer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Fitcer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Fitcer401ApplicationJson extends SpeakeasyBase {
    error?: Fitcer401ApplicationJsonErrorEnum;
    errorDescription?: Fitcer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Fitcer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Fitcer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Fitcer404ApplicationJson extends SpeakeasyBase {
    error?: Fitcer404ApplicationJsonErrorEnum;
    errorDescription?: Fitcer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Fitcer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Fitcer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Fitcer500ApplicationJson extends SpeakeasyBase {
    error?: Fitcer500ApplicationJsonErrorEnum;
    errorDescription?: Fitcer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Fitcer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Fitcer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Fitcer502ApplicationJson extends SpeakeasyBase {
    error?: Fitcer502ApplicationJsonErrorEnum;
    errorDescription?: Fitcer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Fitcer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Fitcer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Fitcer503ApplicationJson extends SpeakeasyBase {
    error?: Fitcer503ApplicationJsonErrorEnum;
    errorDescription?: Fitcer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Fitcer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Fitcer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Fitcer504ApplicationJson extends SpeakeasyBase {
    error?: Fitcer504ApplicationJsonErrorEnum;
    errorDescription?: Fitcer504ApplicationJsonErrorDescriptionEnum;
}
export declare class FitcerRequest extends SpeakeasyBase {
    request?: FitcerRequestBody;
    security: FitcerSecurity;
}
export declare class FitcerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    fitcer400ApplicationJsonObject?: Fitcer400ApplicationJson;
    fitcer401ApplicationJsonObject?: Fitcer401ApplicationJson;
    fitcer404ApplicationJsonObject?: Fitcer404ApplicationJson;
    fitcer500ApplicationJsonObject?: Fitcer500ApplicationJson;
    fitcer502ApplicationJsonObject?: Fitcer502ApplicationJson;
    fitcer503ApplicationJsonObject?: Fitcer503ApplicationJson;
    fitcer504ApplicationJsonObject?: Fitcer504ApplicationJson;
}
