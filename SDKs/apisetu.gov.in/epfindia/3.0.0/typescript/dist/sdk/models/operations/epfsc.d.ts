import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class EpfscRequestBodyCertificateParameters extends SpeakeasyBase {
    dob: string;
    fullName: string;
    scno: string;
}
export declare enum EpfscRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class EpfscRequestBody extends SpeakeasyBase {
    certificateParameters?: EpfscRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: EpfscRequestBodyFormatEnum;
    txnId: string;
}
export declare class EpfscSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class EpfscRequest extends SpeakeasyBase {
    request?: EpfscRequestBody;
    security: EpfscSecurity;
}
export declare enum Epfsc400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Epfsc400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Epfsc400ApplicationJson extends SpeakeasyBase {
    error?: Epfsc400ApplicationJsonErrorEnum;
    errorDescription?: Epfsc400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Epfsc401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Epfsc401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Epfsc401ApplicationJson extends SpeakeasyBase {
    error?: Epfsc401ApplicationJsonErrorEnum;
    errorDescription?: Epfsc401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Epfsc404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Epfsc404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Epfsc404ApplicationJson extends SpeakeasyBase {
    error?: Epfsc404ApplicationJsonErrorEnum;
    errorDescription?: Epfsc404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Epfsc500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Epfsc500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Epfsc500ApplicationJson extends SpeakeasyBase {
    error?: Epfsc500ApplicationJsonErrorEnum;
    errorDescription?: Epfsc500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Epfsc502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Epfsc502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Epfsc502ApplicationJson extends SpeakeasyBase {
    error?: Epfsc502ApplicationJsonErrorEnum;
    errorDescription?: Epfsc502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Epfsc503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Epfsc503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Epfsc503ApplicationJson extends SpeakeasyBase {
    error?: Epfsc503ApplicationJsonErrorEnum;
    errorDescription?: Epfsc503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Epfsc504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Epfsc504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Epfsc504ApplicationJson extends SpeakeasyBase {
    error?: Epfsc504ApplicationJsonErrorEnum;
    errorDescription?: Epfsc504ApplicationJsonErrorDescriptionEnum;
}
export declare class EpfscResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    epfsc400ApplicationJsonObject?: Epfsc400ApplicationJson;
    epfsc401ApplicationJsonObject?: Epfsc401ApplicationJson;
    epfsc404ApplicationJsonObject?: Epfsc404ApplicationJson;
    epfsc500ApplicationJsonObject?: Epfsc500ApplicationJson;
    epfsc502ApplicationJsonObject?: Epfsc502ApplicationJson;
    epfsc503ApplicationJsonObject?: Epfsc503ApplicationJson;
    epfsc504ApplicationJsonObject?: Epfsc504ApplicationJson;
}
