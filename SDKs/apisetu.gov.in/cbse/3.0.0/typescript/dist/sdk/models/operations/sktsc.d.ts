import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SktscRequestBodyCertificateParameters extends SpeakeasyBase {
    fullName: string;
    rollno: string;
    year: string;
}
export declare enum SktscRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class SktscRequestBody extends SpeakeasyBase {
    certificateParameters?: SktscRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: SktscRequestBodyFormatEnum;
    txnId: string;
}
export declare class SktscSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class SktscRequest extends SpeakeasyBase {
    request?: SktscRequestBody;
    security: SktscSecurity;
}
export declare enum Sktsc400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Sktsc400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Sktsc400ApplicationJson extends SpeakeasyBase {
    error?: Sktsc400ApplicationJsonErrorEnum;
    errorDescription?: Sktsc400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Sktsc401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Sktsc401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Sktsc401ApplicationJson extends SpeakeasyBase {
    error?: Sktsc401ApplicationJsonErrorEnum;
    errorDescription?: Sktsc401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Sktsc404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Sktsc404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Sktsc404ApplicationJson extends SpeakeasyBase {
    error?: Sktsc404ApplicationJsonErrorEnum;
    errorDescription?: Sktsc404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Sktsc500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Sktsc500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Sktsc500ApplicationJson extends SpeakeasyBase {
    error?: Sktsc500ApplicationJsonErrorEnum;
    errorDescription?: Sktsc500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Sktsc502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Sktsc502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Sktsc502ApplicationJson extends SpeakeasyBase {
    error?: Sktsc502ApplicationJsonErrorEnum;
    errorDescription?: Sktsc502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Sktsc503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Sktsc503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Sktsc503ApplicationJson extends SpeakeasyBase {
    error?: Sktsc503ApplicationJsonErrorEnum;
    errorDescription?: Sktsc503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Sktsc504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Sktsc504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Sktsc504ApplicationJson extends SpeakeasyBase {
    error?: Sktsc504ApplicationJsonErrorEnum;
    errorDescription?: Sktsc504ApplicationJsonErrorDescriptionEnum;
}
export declare class SktscResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    sktsc400ApplicationJsonObject?: Sktsc400ApplicationJson;
    sktsc401ApplicationJsonObject?: Sktsc401ApplicationJson;
    sktsc404ApplicationJsonObject?: Sktsc404ApplicationJson;
    sktsc500ApplicationJsonObject?: Sktsc500ApplicationJson;
    sktsc502ApplicationJsonObject?: Sktsc502ApplicationJson;
    sktsc503ApplicationJsonObject?: Sktsc503ApplicationJson;
    sktsc504ApplicationJsonObject?: Sktsc504ApplicationJson;
}
