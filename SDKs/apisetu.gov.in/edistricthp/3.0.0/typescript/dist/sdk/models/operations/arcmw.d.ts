import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ArcmwRequestBodyCertificateParameters extends SpeakeasyBase {
    udf1: string;
}
export declare enum ArcmwRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class ArcmwRequestBody extends SpeakeasyBase {
    certificateParameters?: ArcmwRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: ArcmwRequestBodyFormatEnum;
    txnId: string;
}
export declare class ArcmwSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class ArcmwRequest extends SpeakeasyBase {
    request?: ArcmwRequestBody;
    security: ArcmwSecurity;
}
export declare enum Arcmw400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Arcmw400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Arcmw400ApplicationJson extends SpeakeasyBase {
    error?: Arcmw400ApplicationJsonErrorEnum;
    errorDescription?: Arcmw400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Arcmw401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Arcmw401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Arcmw401ApplicationJson extends SpeakeasyBase {
    error?: Arcmw401ApplicationJsonErrorEnum;
    errorDescription?: Arcmw401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Arcmw404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Arcmw404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Arcmw404ApplicationJson extends SpeakeasyBase {
    error?: Arcmw404ApplicationJsonErrorEnum;
    errorDescription?: Arcmw404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Arcmw500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Arcmw500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Arcmw500ApplicationJson extends SpeakeasyBase {
    error?: Arcmw500ApplicationJsonErrorEnum;
    errorDescription?: Arcmw500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Arcmw502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Arcmw502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Arcmw502ApplicationJson extends SpeakeasyBase {
    error?: Arcmw502ApplicationJsonErrorEnum;
    errorDescription?: Arcmw502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Arcmw503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Arcmw503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Arcmw503ApplicationJson extends SpeakeasyBase {
    error?: Arcmw503ApplicationJsonErrorEnum;
    errorDescription?: Arcmw503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Arcmw504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Arcmw504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Arcmw504ApplicationJson extends SpeakeasyBase {
    error?: Arcmw504ApplicationJsonErrorEnum;
    errorDescription?: Arcmw504ApplicationJsonErrorDescriptionEnum;
}
export declare class ArcmwResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    arcmw400ApplicationJsonObject?: Arcmw400ApplicationJson;
    arcmw401ApplicationJsonObject?: Arcmw401ApplicationJson;
    arcmw404ApplicationJsonObject?: Arcmw404ApplicationJson;
    arcmw500ApplicationJsonObject?: Arcmw500ApplicationJson;
    arcmw502ApplicationJsonObject?: Arcmw502ApplicationJson;
    arcmw503ApplicationJsonObject?: Arcmw503ApplicationJson;
    arcmw504ApplicationJsonObject?: Arcmw504ApplicationJson;
}
