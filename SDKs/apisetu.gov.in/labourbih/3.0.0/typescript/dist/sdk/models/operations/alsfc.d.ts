import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AlsfcRequestBodyCertificateParameters extends SpeakeasyBase {
    refNo: string;
    tokenNo: string;
}
export declare enum AlsfcRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class AlsfcRequestBody extends SpeakeasyBase {
    certificateParameters?: AlsfcRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: AlsfcRequestBodyFormatEnum;
    txnId: string;
}
export declare class AlsfcSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class AlsfcRequest extends SpeakeasyBase {
    request?: AlsfcRequestBody;
    security: AlsfcSecurity;
}
export declare enum Alsfc400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Alsfc400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Alsfc400ApplicationJson extends SpeakeasyBase {
    error?: Alsfc400ApplicationJsonErrorEnum;
    errorDescription?: Alsfc400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Alsfc401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Alsfc401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Alsfc401ApplicationJson extends SpeakeasyBase {
    error?: Alsfc401ApplicationJsonErrorEnum;
    errorDescription?: Alsfc401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Alsfc404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Alsfc404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Alsfc404ApplicationJson extends SpeakeasyBase {
    error?: Alsfc404ApplicationJsonErrorEnum;
    errorDescription?: Alsfc404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Alsfc500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Alsfc500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Alsfc500ApplicationJson extends SpeakeasyBase {
    error?: Alsfc500ApplicationJsonErrorEnum;
    errorDescription?: Alsfc500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Alsfc502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Alsfc502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Alsfc502ApplicationJson extends SpeakeasyBase {
    error?: Alsfc502ApplicationJsonErrorEnum;
    errorDescription?: Alsfc502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Alsfc503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Alsfc503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Alsfc503ApplicationJson extends SpeakeasyBase {
    error?: Alsfc503ApplicationJsonErrorEnum;
    errorDescription?: Alsfc503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Alsfc504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Alsfc504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Alsfc504ApplicationJson extends SpeakeasyBase {
    error?: Alsfc504ApplicationJsonErrorEnum;
    errorDescription?: Alsfc504ApplicationJsonErrorDescriptionEnum;
}
export declare class AlsfcResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    alsfc400ApplicationJsonObject?: Alsfc400ApplicationJson;
    alsfc401ApplicationJsonObject?: Alsfc401ApplicationJson;
    alsfc404ApplicationJsonObject?: Alsfc404ApplicationJson;
    alsfc500ApplicationJsonObject?: Alsfc500ApplicationJson;
    alsfc502ApplicationJsonObject?: Alsfc502ApplicationJson;
    alsfc503ApplicationJsonObject?: Alsfc503ApplicationJson;
    alsfc504ApplicationJsonObject?: Alsfc504ApplicationJson;
}
