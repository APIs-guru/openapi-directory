import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ShcerRequestBodyCertificateParameters extends SpeakeasyBase {
    fullName: string;
    refNo: string;
    tokenNo: string;
    uid: string;
}
export declare enum ShcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class ShcerRequestBody extends SpeakeasyBase {
    certificateParameters?: ShcerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: ShcerRequestBodyFormatEnum;
    txnId: string;
}
export declare class ShcerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Shcer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Shcer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Shcer400ApplicationJson extends SpeakeasyBase {
    error?: Shcer400ApplicationJsonErrorEnum;
    errorDescription?: Shcer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Shcer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Shcer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Shcer401ApplicationJson extends SpeakeasyBase {
    error?: Shcer401ApplicationJsonErrorEnum;
    errorDescription?: Shcer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Shcer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Shcer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Shcer404ApplicationJson extends SpeakeasyBase {
    error?: Shcer404ApplicationJsonErrorEnum;
    errorDescription?: Shcer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Shcer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Shcer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Shcer500ApplicationJson extends SpeakeasyBase {
    error?: Shcer500ApplicationJsonErrorEnum;
    errorDescription?: Shcer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Shcer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Shcer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Shcer502ApplicationJson extends SpeakeasyBase {
    error?: Shcer502ApplicationJsonErrorEnum;
    errorDescription?: Shcer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Shcer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Shcer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Shcer503ApplicationJson extends SpeakeasyBase {
    error?: Shcer503ApplicationJsonErrorEnum;
    errorDescription?: Shcer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Shcer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Shcer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Shcer504ApplicationJson extends SpeakeasyBase {
    error?: Shcer504ApplicationJsonErrorEnum;
    errorDescription?: Shcer504ApplicationJsonErrorDescriptionEnum;
}
export declare class ShcerRequest extends SpeakeasyBase {
    request?: ShcerRequestBody;
    security: ShcerSecurity;
}
export declare class ShcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    shcer400ApplicationJsonObject?: Shcer400ApplicationJson;
    shcer401ApplicationJsonObject?: Shcer401ApplicationJson;
    shcer404ApplicationJsonObject?: Shcer404ApplicationJson;
    shcer500ApplicationJsonObject?: Shcer500ApplicationJson;
    shcer502ApplicationJsonObject?: Shcer502ApplicationJson;
    shcer503ApplicationJsonObject?: Shcer503ApplicationJson;
    shcer504ApplicationJsonObject?: Shcer504ApplicationJson;
}
