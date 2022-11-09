import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class NchscRequestBodyCertificateParameters extends SpeakeasyBase {
    fullName: string;
    rollno: string;
    year: string;
}
export declare enum NchscRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class NchscRequestBody extends SpeakeasyBase {
    certificateParameters?: NchscRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: NchscRequestBodyFormatEnum;
    txnId: string;
}
export declare class NchscSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class NchscRequest extends SpeakeasyBase {
    request?: NchscRequestBody;
    security: NchscSecurity;
}
export declare enum Nchsc400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Nchsc400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Nchsc400ApplicationJson extends SpeakeasyBase {
    error?: Nchsc400ApplicationJsonErrorEnum;
    errorDescription?: Nchsc400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Nchsc401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Nchsc401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Nchsc401ApplicationJson extends SpeakeasyBase {
    error?: Nchsc401ApplicationJsonErrorEnum;
    errorDescription?: Nchsc401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Nchsc404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Nchsc404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Nchsc404ApplicationJson extends SpeakeasyBase {
    error?: Nchsc404ApplicationJsonErrorEnum;
    errorDescription?: Nchsc404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Nchsc500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Nchsc500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Nchsc500ApplicationJson extends SpeakeasyBase {
    error?: Nchsc500ApplicationJsonErrorEnum;
    errorDescription?: Nchsc500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Nchsc502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Nchsc502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Nchsc502ApplicationJson extends SpeakeasyBase {
    error?: Nchsc502ApplicationJsonErrorEnum;
    errorDescription?: Nchsc502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Nchsc503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Nchsc503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Nchsc503ApplicationJson extends SpeakeasyBase {
    error?: Nchsc503ApplicationJsonErrorEnum;
    errorDescription?: Nchsc503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Nchsc504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Nchsc504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Nchsc504ApplicationJson extends SpeakeasyBase {
    error?: Nchsc504ApplicationJsonErrorEnum;
    errorDescription?: Nchsc504ApplicationJsonErrorDescriptionEnum;
}
export declare class NchscResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    nchsc400ApplicationJsonObject?: Nchsc400ApplicationJson;
    nchsc401ApplicationJsonObject?: Nchsc401ApplicationJson;
    nchsc404ApplicationJsonObject?: Nchsc404ApplicationJson;
    nchsc500ApplicationJsonObject?: Nchsc500ApplicationJson;
    nchsc502ApplicationJsonObject?: Nchsc502ApplicationJson;
    nchsc503ApplicationJsonObject?: Nchsc503ApplicationJson;
    nchsc504ApplicationJsonObject?: Nchsc504ApplicationJson;
}
