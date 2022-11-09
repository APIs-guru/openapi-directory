import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FfcerRequestBodyCertificateParameters extends SpeakeasyBase {
    name: string;
    refNo: string;
}
export declare enum FfcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class FfcerRequestBody extends SpeakeasyBase {
    certificateParameters?: FfcerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: FfcerRequestBodyFormatEnum;
    txnId: string;
}
export declare class FfcerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class FfcerRequest extends SpeakeasyBase {
    request?: FfcerRequestBody;
    security: FfcerSecurity;
}
export declare enum Ffcer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Ffcer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Ffcer400ApplicationJson extends SpeakeasyBase {
    error?: Ffcer400ApplicationJsonErrorEnum;
    errorDescription?: Ffcer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ffcer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Ffcer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Ffcer401ApplicationJson extends SpeakeasyBase {
    error?: Ffcer401ApplicationJsonErrorEnum;
    errorDescription?: Ffcer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ffcer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Ffcer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Ffcer404ApplicationJson extends SpeakeasyBase {
    error?: Ffcer404ApplicationJsonErrorEnum;
    errorDescription?: Ffcer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ffcer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Ffcer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Ffcer500ApplicationJson extends SpeakeasyBase {
    error?: Ffcer500ApplicationJsonErrorEnum;
    errorDescription?: Ffcer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ffcer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Ffcer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Ffcer502ApplicationJson extends SpeakeasyBase {
    error?: Ffcer502ApplicationJsonErrorEnum;
    errorDescription?: Ffcer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ffcer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Ffcer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Ffcer503ApplicationJson extends SpeakeasyBase {
    error?: Ffcer503ApplicationJsonErrorEnum;
    errorDescription?: Ffcer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ffcer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Ffcer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Ffcer504ApplicationJson extends SpeakeasyBase {
    error?: Ffcer504ApplicationJsonErrorEnum;
    errorDescription?: Ffcer504ApplicationJsonErrorDescriptionEnum;
}
export declare class FfcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ffcer400ApplicationJsonObject?: Ffcer400ApplicationJson;
    ffcer401ApplicationJsonObject?: Ffcer401ApplicationJson;
    ffcer404ApplicationJsonObject?: Ffcer404ApplicationJson;
    ffcer500ApplicationJsonObject?: Ffcer500ApplicationJson;
    ffcer502ApplicationJsonObject?: Ffcer502ApplicationJson;
    ffcer503ApplicationJsonObject?: Ffcer503ApplicationJson;
    ffcer504ApplicationJsonObject?: Ffcer504ApplicationJson;
}
