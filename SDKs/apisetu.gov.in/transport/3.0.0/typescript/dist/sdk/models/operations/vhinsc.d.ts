import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class VhinscRequestBodyCertificateParameters extends SpeakeasyBase {
    fullName: string;
    uid: string;
    chasisNo: string;
    regNo: string;
    swdName: string;
}
export declare enum VhinscRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class VhinscRequestBody extends SpeakeasyBase {
    certificateParameters?: VhinscRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: VhinscRequestBodyFormatEnum;
    txnId: string;
}
export declare class VhinscSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class VhinscRequest extends SpeakeasyBase {
    request?: VhinscRequestBody;
    security: VhinscSecurity;
}
export declare enum Vhinsc400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Vhinsc400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Vhinsc400ApplicationJson extends SpeakeasyBase {
    error?: Vhinsc400ApplicationJsonErrorEnum;
    errorDescription?: Vhinsc400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Vhinsc401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Vhinsc401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Vhinsc401ApplicationJson extends SpeakeasyBase {
    error?: Vhinsc401ApplicationJsonErrorEnum;
    errorDescription?: Vhinsc401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Vhinsc404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Vhinsc404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Vhinsc404ApplicationJson extends SpeakeasyBase {
    error?: Vhinsc404ApplicationJsonErrorEnum;
    errorDescription?: Vhinsc404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Vhinsc500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Vhinsc500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Vhinsc500ApplicationJson extends SpeakeasyBase {
    error?: Vhinsc500ApplicationJsonErrorEnum;
    errorDescription?: Vhinsc500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Vhinsc502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Vhinsc502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Vhinsc502ApplicationJson extends SpeakeasyBase {
    error?: Vhinsc502ApplicationJsonErrorEnum;
    errorDescription?: Vhinsc502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Vhinsc503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Vhinsc503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Vhinsc503ApplicationJson extends SpeakeasyBase {
    error?: Vhinsc503ApplicationJsonErrorEnum;
    errorDescription?: Vhinsc503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Vhinsc504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Vhinsc504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Vhinsc504ApplicationJson extends SpeakeasyBase {
    error?: Vhinsc504ApplicationJsonErrorEnum;
    errorDescription?: Vhinsc504ApplicationJsonErrorDescriptionEnum;
}
export declare class VhinscResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    vhinsc400ApplicationJsonObject?: Vhinsc400ApplicationJson;
    vhinsc401ApplicationJsonObject?: Vhinsc401ApplicationJson;
    vhinsc404ApplicationJsonObject?: Vhinsc404ApplicationJson;
    vhinsc500ApplicationJsonObject?: Vhinsc500ApplicationJson;
    vhinsc502ApplicationJsonObject?: Vhinsc502ApplicationJson;
    vhinsc503ApplicationJsonObject?: Vhinsc503ApplicationJson;
    vhinsc504ApplicationJsonObject?: Vhinsc504ApplicationJson;
}
