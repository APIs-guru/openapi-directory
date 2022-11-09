import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SkhscRequestBodyCertificateParameters extends SpeakeasyBase {
    fullName: string;
    rollno: string;
    year: string;
}
export declare enum SkhscRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class SkhscRequestBody extends SpeakeasyBase {
    certificateParameters?: SkhscRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: SkhscRequestBodyFormatEnum;
    txnId: string;
}
export declare class SkhscSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class SkhscRequest extends SpeakeasyBase {
    request?: SkhscRequestBody;
    security: SkhscSecurity;
}
export declare enum Skhsc400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Skhsc400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Skhsc400ApplicationJson extends SpeakeasyBase {
    error?: Skhsc400ApplicationJsonErrorEnum;
    errorDescription?: Skhsc400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Skhsc401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Skhsc401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Skhsc401ApplicationJson extends SpeakeasyBase {
    error?: Skhsc401ApplicationJsonErrorEnum;
    errorDescription?: Skhsc401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Skhsc404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Skhsc404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Skhsc404ApplicationJson extends SpeakeasyBase {
    error?: Skhsc404ApplicationJsonErrorEnum;
    errorDescription?: Skhsc404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Skhsc500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Skhsc500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Skhsc500ApplicationJson extends SpeakeasyBase {
    error?: Skhsc500ApplicationJsonErrorEnum;
    errorDescription?: Skhsc500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Skhsc502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Skhsc502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Skhsc502ApplicationJson extends SpeakeasyBase {
    error?: Skhsc502ApplicationJsonErrorEnum;
    errorDescription?: Skhsc502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Skhsc503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Skhsc503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Skhsc503ApplicationJson extends SpeakeasyBase {
    error?: Skhsc503ApplicationJsonErrorEnum;
    errorDescription?: Skhsc503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Skhsc504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Skhsc504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Skhsc504ApplicationJson extends SpeakeasyBase {
    error?: Skhsc504ApplicationJsonErrorEnum;
    errorDescription?: Skhsc504ApplicationJsonErrorDescriptionEnum;
}
export declare class SkhscResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    skhsc400ApplicationJsonObject?: Skhsc400ApplicationJson;
    skhsc401ApplicationJsonObject?: Skhsc401ApplicationJson;
    skhsc404ApplicationJsonObject?: Skhsc404ApplicationJson;
    skhsc500ApplicationJsonObject?: Skhsc500ApplicationJson;
    skhsc502ApplicationJsonObject?: Skhsc502ApplicationJson;
    skhsc503ApplicationJsonObject?: Skhsc503ApplicationJson;
    skhsc504ApplicationJsonObject?: Skhsc504ApplicationJson;
}
