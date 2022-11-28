import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TwipcRequestBodyCertificateParameters extends SpeakeasyBase {
    dob: string;
    fullName: string;
    udf1: string;
    udf2: string;
    udf3: string;
    uid: string;
}
export declare enum TwipcRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class TwipcRequestBody extends SpeakeasyBase {
    certificateParameters?: TwipcRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: TwipcRequestBodyFormatEnum;
    txnId: string;
}
export declare class TwipcSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Twipc400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Twipc400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Twipc400ApplicationJson extends SpeakeasyBase {
    error?: Twipc400ApplicationJsonErrorEnum;
    errorDescription?: Twipc400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Twipc401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Twipc401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Twipc401ApplicationJson extends SpeakeasyBase {
    error?: Twipc401ApplicationJsonErrorEnum;
    errorDescription?: Twipc401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Twipc404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Twipc404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Twipc404ApplicationJson extends SpeakeasyBase {
    error?: Twipc404ApplicationJsonErrorEnum;
    errorDescription?: Twipc404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Twipc500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Twipc500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Twipc500ApplicationJson extends SpeakeasyBase {
    error?: Twipc500ApplicationJsonErrorEnum;
    errorDescription?: Twipc500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Twipc502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Twipc502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Twipc502ApplicationJson extends SpeakeasyBase {
    error?: Twipc502ApplicationJsonErrorEnum;
    errorDescription?: Twipc502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Twipc503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Twipc503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Twipc503ApplicationJson extends SpeakeasyBase {
    error?: Twipc503ApplicationJsonErrorEnum;
    errorDescription?: Twipc503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Twipc504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Twipc504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Twipc504ApplicationJson extends SpeakeasyBase {
    error?: Twipc504ApplicationJsonErrorEnum;
    errorDescription?: Twipc504ApplicationJsonErrorDescriptionEnum;
}
export declare class TwipcRequest extends SpeakeasyBase {
    request?: TwipcRequestBody;
    security: TwipcSecurity;
}
export declare class TwipcResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    twipc400ApplicationJsonObject?: Twipc400ApplicationJson;
    twipc401ApplicationJsonObject?: Twipc401ApplicationJson;
    twipc404ApplicationJsonObject?: Twipc404ApplicationJson;
    twipc500ApplicationJsonObject?: Twipc500ApplicationJson;
    twipc502ApplicationJsonObject?: Twipc502ApplicationJson;
    twipc503ApplicationJsonObject?: Twipc503ApplicationJson;
    twipc504ApplicationJsonObject?: Twipc504ApplicationJson;
}
