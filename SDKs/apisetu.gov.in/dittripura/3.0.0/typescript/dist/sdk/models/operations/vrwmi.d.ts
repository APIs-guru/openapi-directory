import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class VrwmiRequestBodyCertificateParameters extends SpeakeasyBase {
    refNo: string;
    tokenNo: string;
}
export declare enum VrwmiRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class VrwmiRequestBody extends SpeakeasyBase {
    certificateParameters?: VrwmiRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: VrwmiRequestBodyFormatEnum;
    txnId: string;
}
export declare class VrwmiSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class VrwmiRequest extends SpeakeasyBase {
    request?: VrwmiRequestBody;
    security: VrwmiSecurity;
}
export declare enum Vrwmi400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Vrwmi400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Vrwmi400ApplicationJson extends SpeakeasyBase {
    error?: Vrwmi400ApplicationJsonErrorEnum;
    errorDescription?: Vrwmi400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Vrwmi401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Vrwmi401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Vrwmi401ApplicationJson extends SpeakeasyBase {
    error?: Vrwmi401ApplicationJsonErrorEnum;
    errorDescription?: Vrwmi401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Vrwmi404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Vrwmi404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Vrwmi404ApplicationJson extends SpeakeasyBase {
    error?: Vrwmi404ApplicationJsonErrorEnum;
    errorDescription?: Vrwmi404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Vrwmi500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Vrwmi500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Vrwmi500ApplicationJson extends SpeakeasyBase {
    error?: Vrwmi500ApplicationJsonErrorEnum;
    errorDescription?: Vrwmi500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Vrwmi502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Vrwmi502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Vrwmi502ApplicationJson extends SpeakeasyBase {
    error?: Vrwmi502ApplicationJsonErrorEnum;
    errorDescription?: Vrwmi502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Vrwmi503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Vrwmi503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Vrwmi503ApplicationJson extends SpeakeasyBase {
    error?: Vrwmi503ApplicationJsonErrorEnum;
    errorDescription?: Vrwmi503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Vrwmi504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Vrwmi504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Vrwmi504ApplicationJson extends SpeakeasyBase {
    error?: Vrwmi504ApplicationJsonErrorEnum;
    errorDescription?: Vrwmi504ApplicationJsonErrorDescriptionEnum;
}
export declare class VrwmiResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    vrwmi400ApplicationJsonObject?: Vrwmi400ApplicationJson;
    vrwmi401ApplicationJsonObject?: Vrwmi401ApplicationJson;
    vrwmi404ApplicationJsonObject?: Vrwmi404ApplicationJson;
    vrwmi500ApplicationJsonObject?: Vrwmi500ApplicationJson;
    vrwmi502ApplicationJsonObject?: Vrwmi502ApplicationJson;
    vrwmi503ApplicationJsonObject?: Vrwmi503ApplicationJson;
    vrwmi504ApplicationJsonObject?: Vrwmi504ApplicationJson;
}
