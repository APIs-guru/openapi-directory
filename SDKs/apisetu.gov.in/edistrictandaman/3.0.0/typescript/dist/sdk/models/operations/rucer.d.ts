import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RucerRequestBodyCertificateParameters extends SpeakeasyBase {
    certificateNumber: string;
}
export declare enum RucerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class RucerRequestBody extends SpeakeasyBase {
    certificateParameters?: RucerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: RucerRequestBodyFormatEnum;
    txnId: string;
}
export declare class RucerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Rucer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Rucer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Rucer400ApplicationJson extends SpeakeasyBase {
    error?: Rucer400ApplicationJsonErrorEnum;
    errorDescription?: Rucer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Rucer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Rucer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Rucer401ApplicationJson extends SpeakeasyBase {
    error?: Rucer401ApplicationJsonErrorEnum;
    errorDescription?: Rucer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Rucer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Rucer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Rucer404ApplicationJson extends SpeakeasyBase {
    error?: Rucer404ApplicationJsonErrorEnum;
    errorDescription?: Rucer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Rucer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Rucer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Rucer500ApplicationJson extends SpeakeasyBase {
    error?: Rucer500ApplicationJsonErrorEnum;
    errorDescription?: Rucer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Rucer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Rucer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Rucer502ApplicationJson extends SpeakeasyBase {
    error?: Rucer502ApplicationJsonErrorEnum;
    errorDescription?: Rucer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Rucer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Rucer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Rucer503ApplicationJson extends SpeakeasyBase {
    error?: Rucer503ApplicationJsonErrorEnum;
    errorDescription?: Rucer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Rucer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Rucer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Rucer504ApplicationJson extends SpeakeasyBase {
    error?: Rucer504ApplicationJsonErrorEnum;
    errorDescription?: Rucer504ApplicationJsonErrorDescriptionEnum;
}
export declare class RucerRequest extends SpeakeasyBase {
    request?: RucerRequestBody;
    security: RucerSecurity;
}
export declare class RucerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rucer400ApplicationJsonObject?: Rucer400ApplicationJson;
    rucer401ApplicationJsonObject?: Rucer401ApplicationJson;
    rucer404ApplicationJsonObject?: Rucer404ApplicationJson;
    rucer500ApplicationJsonObject?: Rucer500ApplicationJson;
    rucer502ApplicationJsonObject?: Rucer502ApplicationJson;
    rucer503ApplicationJsonObject?: Rucer503ApplicationJson;
    rucer504ApplicationJsonObject?: Rucer504ApplicationJson;
}
