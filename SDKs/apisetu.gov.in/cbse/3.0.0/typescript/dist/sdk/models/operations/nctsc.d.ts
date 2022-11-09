import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class NctscRequestBodyCertificateParameters extends SpeakeasyBase {
    fullName: string;
    rollno: string;
    year: string;
}
export declare enum NctscRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class NctscRequestBody extends SpeakeasyBase {
    certificateParameters?: NctscRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: NctscRequestBodyFormatEnum;
    txnId: string;
}
export declare class NctscSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class NctscRequest extends SpeakeasyBase {
    request?: NctscRequestBody;
    security: NctscSecurity;
}
export declare enum Nctsc400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Nctsc400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Nctsc400ApplicationJson extends SpeakeasyBase {
    error?: Nctsc400ApplicationJsonErrorEnum;
    errorDescription?: Nctsc400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Nctsc401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Nctsc401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Nctsc401ApplicationJson extends SpeakeasyBase {
    error?: Nctsc401ApplicationJsonErrorEnum;
    errorDescription?: Nctsc401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Nctsc404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Nctsc404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Nctsc404ApplicationJson extends SpeakeasyBase {
    error?: Nctsc404ApplicationJsonErrorEnum;
    errorDescription?: Nctsc404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Nctsc500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Nctsc500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Nctsc500ApplicationJson extends SpeakeasyBase {
    error?: Nctsc500ApplicationJsonErrorEnum;
    errorDescription?: Nctsc500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Nctsc502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Nctsc502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Nctsc502ApplicationJson extends SpeakeasyBase {
    error?: Nctsc502ApplicationJsonErrorEnum;
    errorDescription?: Nctsc502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Nctsc503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Nctsc503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Nctsc503ApplicationJson extends SpeakeasyBase {
    error?: Nctsc503ApplicationJsonErrorEnum;
    errorDescription?: Nctsc503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Nctsc504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Nctsc504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Nctsc504ApplicationJson extends SpeakeasyBase {
    error?: Nctsc504ApplicationJsonErrorEnum;
    errorDescription?: Nctsc504ApplicationJsonErrorDescriptionEnum;
}
export declare class NctscResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    nctsc400ApplicationJsonObject?: Nctsc400ApplicationJson;
    nctsc401ApplicationJsonObject?: Nctsc401ApplicationJson;
    nctsc404ApplicationJsonObject?: Nctsc404ApplicationJson;
    nctsc500ApplicationJsonObject?: Nctsc500ApplicationJson;
    nctsc502ApplicationJsonObject?: Nctsc502ApplicationJson;
    nctsc503ApplicationJsonObject?: Nctsc503ApplicationJson;
    nctsc504ApplicationJsonObject?: Nctsc504ApplicationJson;
}
