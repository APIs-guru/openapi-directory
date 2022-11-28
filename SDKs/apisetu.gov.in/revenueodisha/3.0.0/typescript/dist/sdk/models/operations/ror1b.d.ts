import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class Ror1bRequestBodyCertificateParameters extends SpeakeasyBase {
    khatano: string;
    level1: string;
    level2: string;
    level3: string;
}
export declare enum Ror1bRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class Ror1bRequestBody extends SpeakeasyBase {
    certificateParameters?: Ror1bRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: Ror1bRequestBodyFormatEnum;
    txnId: string;
}
export declare class Ror1bSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Ror1b400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Ror1b400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Ror1b400ApplicationJson extends SpeakeasyBase {
    error?: Ror1b400ApplicationJsonErrorEnum;
    errorDescription?: Ror1b400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ror1b401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Ror1b401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Ror1b401ApplicationJson extends SpeakeasyBase {
    error?: Ror1b401ApplicationJsonErrorEnum;
    errorDescription?: Ror1b401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ror1b404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Ror1b404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Ror1b404ApplicationJson extends SpeakeasyBase {
    error?: Ror1b404ApplicationJsonErrorEnum;
    errorDescription?: Ror1b404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ror1b500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Ror1b500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Ror1b500ApplicationJson extends SpeakeasyBase {
    error?: Ror1b500ApplicationJsonErrorEnum;
    errorDescription?: Ror1b500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ror1b502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Ror1b502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Ror1b502ApplicationJson extends SpeakeasyBase {
    error?: Ror1b502ApplicationJsonErrorEnum;
    errorDescription?: Ror1b502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ror1b503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Ror1b503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Ror1b503ApplicationJson extends SpeakeasyBase {
    error?: Ror1b503ApplicationJsonErrorEnum;
    errorDescription?: Ror1b503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ror1b504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Ror1b504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Ror1b504ApplicationJson extends SpeakeasyBase {
    error?: Ror1b504ApplicationJsonErrorEnum;
    errorDescription?: Ror1b504ApplicationJsonErrorDescriptionEnum;
}
export declare class Ror1bRequest extends SpeakeasyBase {
    request?: Ror1bRequestBody;
    security: Ror1bSecurity;
}
export declare class Ror1bResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ror1b400ApplicationJsonObject?: Ror1b400ApplicationJson;
    ror1b401ApplicationJsonObject?: Ror1b401ApplicationJson;
    ror1b404ApplicationJsonObject?: Ror1b404ApplicationJson;
    ror1b500ApplicationJsonObject?: Ror1b500ApplicationJson;
    ror1b502ApplicationJsonObject?: Ror1b502ApplicationJson;
    ror1b503ApplicationJsonObject?: Ror1b503ApplicationJson;
    ror1b504ApplicationJsonObject?: Ror1b504ApplicationJson;
}
