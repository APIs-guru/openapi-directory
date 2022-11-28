import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class KecerRequestBodyCertificateParameters extends SpeakeasyBase {
    documentNumber: string;
}
export declare enum KecerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class KecerRequestBody extends SpeakeasyBase {
    certificateParameters?: KecerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: KecerRequestBodyFormatEnum;
    txnId: string;
}
export declare class KecerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Kecer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Kecer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Kecer400ApplicationJson extends SpeakeasyBase {
    error?: Kecer400ApplicationJsonErrorEnum;
    errorDescription?: Kecer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Kecer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Kecer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Kecer401ApplicationJson extends SpeakeasyBase {
    error?: Kecer401ApplicationJsonErrorEnum;
    errorDescription?: Kecer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Kecer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Kecer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Kecer404ApplicationJson extends SpeakeasyBase {
    error?: Kecer404ApplicationJsonErrorEnum;
    errorDescription?: Kecer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Kecer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Kecer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Kecer500ApplicationJson extends SpeakeasyBase {
    error?: Kecer500ApplicationJsonErrorEnum;
    errorDescription?: Kecer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Kecer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Kecer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Kecer502ApplicationJson extends SpeakeasyBase {
    error?: Kecer502ApplicationJsonErrorEnum;
    errorDescription?: Kecer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Kecer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Kecer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Kecer503ApplicationJson extends SpeakeasyBase {
    error?: Kecer503ApplicationJsonErrorEnum;
    errorDescription?: Kecer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Kecer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Kecer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Kecer504ApplicationJson extends SpeakeasyBase {
    error?: Kecer504ApplicationJsonErrorEnum;
    errorDescription?: Kecer504ApplicationJsonErrorDescriptionEnum;
}
export declare class KecerRequest extends SpeakeasyBase {
    request?: KecerRequestBody;
    security: KecerSecurity;
}
export declare class KecerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    kecer400ApplicationJsonObject?: Kecer400ApplicationJson;
    kecer401ApplicationJsonObject?: Kecer401ApplicationJson;
    kecer404ApplicationJsonObject?: Kecer404ApplicationJson;
    kecer500ApplicationJsonObject?: Kecer500ApplicationJson;
    kecer502ApplicationJsonObject?: Kecer502ApplicationJson;
    kecer503ApplicationJsonObject?: Kecer503ApplicationJson;
    kecer504ApplicationJsonObject?: Kecer504ApplicationJson;
}
