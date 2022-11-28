import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PsprtRequestBodyCertificateParameters extends SpeakeasyBase {
    name: string;
    refNo: string;
}
export declare enum PsprtRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class PsprtRequestBody extends SpeakeasyBase {
    certificateParameters?: PsprtRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: PsprtRequestBodyFormatEnum;
    txnId: string;
}
export declare class PsprtSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Psprt400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Psprt400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Psprt400ApplicationJson extends SpeakeasyBase {
    error?: Psprt400ApplicationJsonErrorEnum;
    errorDescription?: Psprt400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Psprt401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Psprt401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Psprt401ApplicationJson extends SpeakeasyBase {
    error?: Psprt401ApplicationJsonErrorEnum;
    errorDescription?: Psprt401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Psprt404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Psprt404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Psprt404ApplicationJson extends SpeakeasyBase {
    error?: Psprt404ApplicationJsonErrorEnum;
    errorDescription?: Psprt404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Psprt500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Psprt500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Psprt500ApplicationJson extends SpeakeasyBase {
    error?: Psprt500ApplicationJsonErrorEnum;
    errorDescription?: Psprt500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Psprt502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Psprt502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Psprt502ApplicationJson extends SpeakeasyBase {
    error?: Psprt502ApplicationJsonErrorEnum;
    errorDescription?: Psprt502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Psprt503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Psprt503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Psprt503ApplicationJson extends SpeakeasyBase {
    error?: Psprt503ApplicationJsonErrorEnum;
    errorDescription?: Psprt503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Psprt504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Psprt504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Psprt504ApplicationJson extends SpeakeasyBase {
    error?: Psprt504ApplicationJsonErrorEnum;
    errorDescription?: Psprt504ApplicationJsonErrorDescriptionEnum;
}
export declare class PsprtRequest extends SpeakeasyBase {
    request?: PsprtRequestBody;
    security: PsprtSecurity;
}
export declare class PsprtResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    psprt400ApplicationJsonObject?: Psprt400ApplicationJson;
    psprt401ApplicationJsonObject?: Psprt401ApplicationJson;
    psprt404ApplicationJsonObject?: Psprt404ApplicationJson;
    psprt500ApplicationJsonObject?: Psprt500ApplicationJson;
    psprt502ApplicationJsonObject?: Psprt502ApplicationJson;
    psprt503ApplicationJsonObject?: Psprt503ApplicationJson;
    psprt504ApplicationJsonObject?: Psprt504ApplicationJson;
}
