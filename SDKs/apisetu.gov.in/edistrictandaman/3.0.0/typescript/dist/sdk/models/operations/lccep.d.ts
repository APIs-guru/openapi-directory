import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LccepRequestBodyCertificateParameters extends SpeakeasyBase {
    certificateNumber: string;
}
export declare enum LccepRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class LccepRequestBody extends SpeakeasyBase {
    certificateParameters?: LccepRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: LccepRequestBodyFormatEnum;
    txnId: string;
}
export declare class LccepSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Lccep400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Lccep400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Lccep400ApplicationJson extends SpeakeasyBase {
    error?: Lccep400ApplicationJsonErrorEnum;
    errorDescription?: Lccep400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Lccep401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Lccep401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Lccep401ApplicationJson extends SpeakeasyBase {
    error?: Lccep401ApplicationJsonErrorEnum;
    errorDescription?: Lccep401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Lccep404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Lccep404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Lccep404ApplicationJson extends SpeakeasyBase {
    error?: Lccep404ApplicationJsonErrorEnum;
    errorDescription?: Lccep404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Lccep500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Lccep500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Lccep500ApplicationJson extends SpeakeasyBase {
    error?: Lccep500ApplicationJsonErrorEnum;
    errorDescription?: Lccep500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Lccep502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Lccep502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Lccep502ApplicationJson extends SpeakeasyBase {
    error?: Lccep502ApplicationJsonErrorEnum;
    errorDescription?: Lccep502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Lccep503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Lccep503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Lccep503ApplicationJson extends SpeakeasyBase {
    error?: Lccep503ApplicationJsonErrorEnum;
    errorDescription?: Lccep503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Lccep504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Lccep504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Lccep504ApplicationJson extends SpeakeasyBase {
    error?: Lccep504ApplicationJsonErrorEnum;
    errorDescription?: Lccep504ApplicationJsonErrorDescriptionEnum;
}
export declare class LccepRequest extends SpeakeasyBase {
    request?: LccepRequestBody;
    security: LccepSecurity;
}
export declare class LccepResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    lccep400ApplicationJsonObject?: Lccep400ApplicationJson;
    lccep401ApplicationJsonObject?: Lccep401ApplicationJson;
    lccep404ApplicationJsonObject?: Lccep404ApplicationJson;
    lccep500ApplicationJsonObject?: Lccep500ApplicationJson;
    lccep502ApplicationJsonObject?: Lccep502ApplicationJson;
    lccep503ApplicationJsonObject?: Lccep503ApplicationJson;
    lccep504ApplicationJsonObject?: Lccep504ApplicationJson;
}
