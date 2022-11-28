import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MutanRequestBodyCertificateParameters extends SpeakeasyBase {
    documentNumber: string;
}
export declare enum MutanRequestBodyFormatEnum {
    Xml = "xml",
    Pdf = "pdf"
}
export declare class MutanRequestBody extends SpeakeasyBase {
    certificateParameters?: MutanRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: MutanRequestBodyFormatEnum;
    txnId: string;
}
export declare class MutanSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Mutan400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Mutan400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Mutan400ApplicationJson extends SpeakeasyBase {
    error?: Mutan400ApplicationJsonErrorEnum;
    errorDescription?: Mutan400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Mutan401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Mutan401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Mutan401ApplicationJson extends SpeakeasyBase {
    error?: Mutan401ApplicationJsonErrorEnum;
    errorDescription?: Mutan401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Mutan404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Mutan404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Mutan404ApplicationJson extends SpeakeasyBase {
    error?: Mutan404ApplicationJsonErrorEnum;
    errorDescription?: Mutan404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Mutan500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Mutan500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Mutan500ApplicationJson extends SpeakeasyBase {
    error?: Mutan500ApplicationJsonErrorEnum;
    errorDescription?: Mutan500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Mutan502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Mutan502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Mutan502ApplicationJson extends SpeakeasyBase {
    error?: Mutan502ApplicationJsonErrorEnum;
    errorDescription?: Mutan502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Mutan503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Mutan503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Mutan503ApplicationJson extends SpeakeasyBase {
    error?: Mutan503ApplicationJsonErrorEnum;
    errorDescription?: Mutan503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Mutan504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Mutan504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Mutan504ApplicationJson extends SpeakeasyBase {
    error?: Mutan504ApplicationJsonErrorEnum;
    errorDescription?: Mutan504ApplicationJsonErrorDescriptionEnum;
}
export declare class MutanRequest extends SpeakeasyBase {
    request?: MutanRequestBody;
    security: MutanSecurity;
}
export declare class MutanResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    mutan400ApplicationJsonObject?: Mutan400ApplicationJson;
    mutan401ApplicationJsonObject?: Mutan401ApplicationJson;
    mutan404ApplicationJsonObject?: Mutan404ApplicationJson;
    mutan500ApplicationJsonObject?: Mutan500ApplicationJson;
    mutan502ApplicationJsonObject?: Mutan502ApplicationJson;
    mutan503ApplicationJsonObject?: Mutan503ApplicationJson;
    mutan504ApplicationJsonObject?: Mutan504ApplicationJson;
}
