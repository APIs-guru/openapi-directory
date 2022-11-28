import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AlimwRequestBodyCertificateParameters extends SpeakeasyBase {
    udf1: string;
}
export declare enum AlimwRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class AlimwRequestBody extends SpeakeasyBase {
    certificateParameters?: AlimwRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: AlimwRequestBodyFormatEnum;
    txnId: string;
}
export declare class AlimwSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Alimw400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Alimw400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Alimw400ApplicationJson extends SpeakeasyBase {
    error?: Alimw400ApplicationJsonErrorEnum;
    errorDescription?: Alimw400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Alimw401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Alimw401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Alimw401ApplicationJson extends SpeakeasyBase {
    error?: Alimw401ApplicationJsonErrorEnum;
    errorDescription?: Alimw401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Alimw404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Alimw404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Alimw404ApplicationJson extends SpeakeasyBase {
    error?: Alimw404ApplicationJsonErrorEnum;
    errorDescription?: Alimw404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Alimw500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Alimw500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Alimw500ApplicationJson extends SpeakeasyBase {
    error?: Alimw500ApplicationJsonErrorEnum;
    errorDescription?: Alimw500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Alimw502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Alimw502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Alimw502ApplicationJson extends SpeakeasyBase {
    error?: Alimw502ApplicationJsonErrorEnum;
    errorDescription?: Alimw502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Alimw503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Alimw503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Alimw503ApplicationJson extends SpeakeasyBase {
    error?: Alimw503ApplicationJsonErrorEnum;
    errorDescription?: Alimw503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Alimw504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Alimw504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Alimw504ApplicationJson extends SpeakeasyBase {
    error?: Alimw504ApplicationJsonErrorEnum;
    errorDescription?: Alimw504ApplicationJsonErrorDescriptionEnum;
}
export declare class AlimwRequest extends SpeakeasyBase {
    request?: AlimwRequestBody;
    security: AlimwSecurity;
}
export declare class AlimwResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    alimw400ApplicationJsonObject?: Alimw400ApplicationJson;
    alimw401ApplicationJsonObject?: Alimw401ApplicationJson;
    alimw404ApplicationJsonObject?: Alimw404ApplicationJson;
    alimw500ApplicationJsonObject?: Alimw500ApplicationJson;
    alimw502ApplicationJsonObject?: Alimw502ApplicationJson;
    alimw503ApplicationJsonObject?: Alimw503ApplicationJson;
    alimw504ApplicationJsonObject?: Alimw504ApplicationJson;
}
