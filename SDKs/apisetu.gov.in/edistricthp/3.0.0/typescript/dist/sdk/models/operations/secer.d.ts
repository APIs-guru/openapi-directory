import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SecerRequestBodyCertificateParameters extends SpeakeasyBase {
    udf1: string;
}
export declare enum SecerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class SecerRequestBody extends SpeakeasyBase {
    certificateParameters?: SecerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: SecerRequestBodyFormatEnum;
    txnId: string;
}
export declare class SecerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Secer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Secer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Secer400ApplicationJson extends SpeakeasyBase {
    error?: Secer400ApplicationJsonErrorEnum;
    errorDescription?: Secer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Secer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Secer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Secer401ApplicationJson extends SpeakeasyBase {
    error?: Secer401ApplicationJsonErrorEnum;
    errorDescription?: Secer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Secer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Secer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Secer404ApplicationJson extends SpeakeasyBase {
    error?: Secer404ApplicationJsonErrorEnum;
    errorDescription?: Secer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Secer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Secer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Secer500ApplicationJson extends SpeakeasyBase {
    error?: Secer500ApplicationJsonErrorEnum;
    errorDescription?: Secer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Secer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Secer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Secer502ApplicationJson extends SpeakeasyBase {
    error?: Secer502ApplicationJsonErrorEnum;
    errorDescription?: Secer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Secer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Secer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Secer503ApplicationJson extends SpeakeasyBase {
    error?: Secer503ApplicationJsonErrorEnum;
    errorDescription?: Secer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Secer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Secer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Secer504ApplicationJson extends SpeakeasyBase {
    error?: Secer504ApplicationJsonErrorEnum;
    errorDescription?: Secer504ApplicationJsonErrorDescriptionEnum;
}
export declare class SecerRequest extends SpeakeasyBase {
    request?: SecerRequestBody;
    security: SecerSecurity;
}
export declare class SecerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    secer400ApplicationJsonObject?: Secer400ApplicationJson;
    secer401ApplicationJsonObject?: Secer401ApplicationJson;
    secer404ApplicationJsonObject?: Secer404ApplicationJson;
    secer500ApplicationJsonObject?: Secer500ApplicationJson;
    secer502ApplicationJsonObject?: Secer502ApplicationJson;
    secer503ApplicationJsonObject?: Secer503ApplicationJson;
    secer504ApplicationJsonObject?: Secer504ApplicationJson;
}
