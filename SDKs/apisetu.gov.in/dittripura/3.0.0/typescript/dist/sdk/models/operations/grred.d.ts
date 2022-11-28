import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GrredRequestBodyCertificateParameters extends SpeakeasyBase {
    refNo: string;
    tokenNo: string;
}
export declare enum GrredRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class GrredRequestBody extends SpeakeasyBase {
    certificateParameters?: GrredRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: GrredRequestBodyFormatEnum;
    txnId: string;
}
export declare class GrredSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Grred400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Grred400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Grred400ApplicationJson extends SpeakeasyBase {
    error?: Grred400ApplicationJsonErrorEnum;
    errorDescription?: Grred400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Grred401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Grred401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Grred401ApplicationJson extends SpeakeasyBase {
    error?: Grred401ApplicationJsonErrorEnum;
    errorDescription?: Grred401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Grred404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Grred404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Grred404ApplicationJson extends SpeakeasyBase {
    error?: Grred404ApplicationJsonErrorEnum;
    errorDescription?: Grred404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Grred500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Grred500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Grred500ApplicationJson extends SpeakeasyBase {
    error?: Grred500ApplicationJsonErrorEnum;
    errorDescription?: Grred500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Grred502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Grred502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Grred502ApplicationJson extends SpeakeasyBase {
    error?: Grred502ApplicationJsonErrorEnum;
    errorDescription?: Grred502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Grred503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Grred503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Grred503ApplicationJson extends SpeakeasyBase {
    error?: Grred503ApplicationJsonErrorEnum;
    errorDescription?: Grred503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Grred504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Grred504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Grred504ApplicationJson extends SpeakeasyBase {
    error?: Grred504ApplicationJsonErrorEnum;
    errorDescription?: Grred504ApplicationJsonErrorDescriptionEnum;
}
export declare class GrredRequest extends SpeakeasyBase {
    request?: GrredRequestBody;
    security: GrredSecurity;
}
export declare class GrredResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    grred400ApplicationJsonObject?: Grred400ApplicationJson;
    grred401ApplicationJsonObject?: Grred401ApplicationJson;
    grred404ApplicationJsonObject?: Grred404ApplicationJson;
    grred500ApplicationJsonObject?: Grred500ApplicationJson;
    grred502ApplicationJsonObject?: Grred502ApplicationJson;
    grred503ApplicationJsonObject?: Grred503ApplicationJson;
    grred504ApplicationJsonObject?: Grred504ApplicationJson;
}
