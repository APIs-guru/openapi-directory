import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PmjayRequestBodyCertificateParameters extends SpeakeasyBase {
    dob: string;
    fullName: string;
    udf1: string;
    udf2: string;
}
export declare enum PmjayRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class PmjayRequestBody extends SpeakeasyBase {
    certificateParameters?: PmjayRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: PmjayRequestBodyFormatEnum;
    txnId: string;
}
export declare class PmjaySecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class PmjayRequest extends SpeakeasyBase {
    request?: PmjayRequestBody;
    security: PmjaySecurity;
}
export declare enum Pmjay400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Pmjay400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Pmjay400ApplicationJson extends SpeakeasyBase {
    error?: Pmjay400ApplicationJsonErrorEnum;
    errorDescription?: Pmjay400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Pmjay401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Pmjay401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Pmjay401ApplicationJson extends SpeakeasyBase {
    error?: Pmjay401ApplicationJsonErrorEnum;
    errorDescription?: Pmjay401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Pmjay404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Pmjay404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Pmjay404ApplicationJson extends SpeakeasyBase {
    error?: Pmjay404ApplicationJsonErrorEnum;
    errorDescription?: Pmjay404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Pmjay500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Pmjay500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Pmjay500ApplicationJson extends SpeakeasyBase {
    error?: Pmjay500ApplicationJsonErrorEnum;
    errorDescription?: Pmjay500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Pmjay502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Pmjay502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Pmjay502ApplicationJson extends SpeakeasyBase {
    error?: Pmjay502ApplicationJsonErrorEnum;
    errorDescription?: Pmjay502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Pmjay503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Pmjay503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Pmjay503ApplicationJson extends SpeakeasyBase {
    error?: Pmjay503ApplicationJsonErrorEnum;
    errorDescription?: Pmjay503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Pmjay504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Pmjay504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Pmjay504ApplicationJson extends SpeakeasyBase {
    error?: Pmjay504ApplicationJsonErrorEnum;
    errorDescription?: Pmjay504ApplicationJsonErrorDescriptionEnum;
}
export declare class PmjayResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    pmjay400ApplicationJsonObject?: Pmjay400ApplicationJson;
    pmjay401ApplicationJsonObject?: Pmjay401ApplicationJson;
    pmjay404ApplicationJsonObject?: Pmjay404ApplicationJson;
    pmjay500ApplicationJsonObject?: Pmjay500ApplicationJson;
    pmjay502ApplicationJsonObject?: Pmjay502ApplicationJson;
    pmjay503ApplicationJsonObject?: Pmjay503ApplicationJson;
    pmjay504ApplicationJsonObject?: Pmjay504ApplicationJson;
}
