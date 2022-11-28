import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PfdawRequestBodyCertificateParameters extends SpeakeasyBase {
    fullName: string;
    registration: string;
}
export declare enum PfdawRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class PfdawRequestBody extends SpeakeasyBase {
    certificateParameters?: PfdawRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: PfdawRequestBodyFormatEnum;
    txnId: string;
}
export declare class PfdawSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Pfdaw400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Pfdaw400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Pfdaw400ApplicationJson extends SpeakeasyBase {
    error?: Pfdaw400ApplicationJsonErrorEnum;
    errorDescription?: Pfdaw400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Pfdaw401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Pfdaw401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Pfdaw401ApplicationJson extends SpeakeasyBase {
    error?: Pfdaw401ApplicationJsonErrorEnum;
    errorDescription?: Pfdaw401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Pfdaw404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Pfdaw404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Pfdaw404ApplicationJson extends SpeakeasyBase {
    error?: Pfdaw404ApplicationJsonErrorEnum;
    errorDescription?: Pfdaw404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Pfdaw500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Pfdaw500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Pfdaw500ApplicationJson extends SpeakeasyBase {
    error?: Pfdaw500ApplicationJsonErrorEnum;
    errorDescription?: Pfdaw500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Pfdaw502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Pfdaw502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Pfdaw502ApplicationJson extends SpeakeasyBase {
    error?: Pfdaw502ApplicationJsonErrorEnum;
    errorDescription?: Pfdaw502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Pfdaw503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Pfdaw503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Pfdaw503ApplicationJson extends SpeakeasyBase {
    error?: Pfdaw503ApplicationJsonErrorEnum;
    errorDescription?: Pfdaw503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Pfdaw504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Pfdaw504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Pfdaw504ApplicationJson extends SpeakeasyBase {
    error?: Pfdaw504ApplicationJsonErrorEnum;
    errorDescription?: Pfdaw504ApplicationJsonErrorDescriptionEnum;
}
export declare class PfdawRequest extends SpeakeasyBase {
    request?: PfdawRequestBody;
    security: PfdawSecurity;
}
export declare class PfdawResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    pfdaw400ApplicationJsonObject?: Pfdaw400ApplicationJson;
    pfdaw401ApplicationJsonObject?: Pfdaw401ApplicationJson;
    pfdaw404ApplicationJsonObject?: Pfdaw404ApplicationJson;
    pfdaw500ApplicationJsonObject?: Pfdaw500ApplicationJson;
    pfdaw502ApplicationJsonObject?: Pfdaw502ApplicationJson;
    pfdaw503ApplicationJsonObject?: Pfdaw503ApplicationJson;
    pfdaw504ApplicationJsonObject?: Pfdaw504ApplicationJson;
}
