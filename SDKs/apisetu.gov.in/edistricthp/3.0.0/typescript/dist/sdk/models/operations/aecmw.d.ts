import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AecmwRequestBodyCertificateParameters extends SpeakeasyBase {
    udf1: string;
}
export declare enum AecmwRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class AecmwRequestBody extends SpeakeasyBase {
    certificateParameters?: AecmwRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: AecmwRequestBodyFormatEnum;
    txnId: string;
}
export declare class AecmwSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Aecmw400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Aecmw400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Aecmw400ApplicationJson extends SpeakeasyBase {
    error?: Aecmw400ApplicationJsonErrorEnum;
    errorDescription?: Aecmw400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Aecmw401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Aecmw401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Aecmw401ApplicationJson extends SpeakeasyBase {
    error?: Aecmw401ApplicationJsonErrorEnum;
    errorDescription?: Aecmw401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Aecmw404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Aecmw404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Aecmw404ApplicationJson extends SpeakeasyBase {
    error?: Aecmw404ApplicationJsonErrorEnum;
    errorDescription?: Aecmw404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Aecmw500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Aecmw500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Aecmw500ApplicationJson extends SpeakeasyBase {
    error?: Aecmw500ApplicationJsonErrorEnum;
    errorDescription?: Aecmw500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Aecmw502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Aecmw502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Aecmw502ApplicationJson extends SpeakeasyBase {
    error?: Aecmw502ApplicationJsonErrorEnum;
    errorDescription?: Aecmw502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Aecmw503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Aecmw503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Aecmw503ApplicationJson extends SpeakeasyBase {
    error?: Aecmw503ApplicationJsonErrorEnum;
    errorDescription?: Aecmw503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Aecmw504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Aecmw504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Aecmw504ApplicationJson extends SpeakeasyBase {
    error?: Aecmw504ApplicationJsonErrorEnum;
    errorDescription?: Aecmw504ApplicationJsonErrorDescriptionEnum;
}
export declare class AecmwRequest extends SpeakeasyBase {
    request?: AecmwRequestBody;
    security: AecmwSecurity;
}
export declare class AecmwResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    aecmw400ApplicationJsonObject?: Aecmw400ApplicationJson;
    aecmw401ApplicationJsonObject?: Aecmw401ApplicationJson;
    aecmw404ApplicationJsonObject?: Aecmw404ApplicationJson;
    aecmw500ApplicationJsonObject?: Aecmw500ApplicationJson;
    aecmw502ApplicationJsonObject?: Aecmw502ApplicationJson;
    aecmw503ApplicationJsonObject?: Aecmw503ApplicationJson;
    aecmw504ApplicationJsonObject?: Aecmw504ApplicationJson;
}
