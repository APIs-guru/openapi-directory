import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PrcptRequestBodyCertificateParameters extends SpeakeasyBase {
    fullName: string;
    piDob: string;
    piFinYear: string;
    piPolicynbr: string;
}
export declare enum PrcptRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class PrcptRequestBody extends SpeakeasyBase {
    certificateParameters?: PrcptRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: PrcptRequestBodyFormatEnum;
    txnId: string;
}
export declare class PrcptSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class PrcptRequest extends SpeakeasyBase {
    request?: PrcptRequestBody;
    security: PrcptSecurity;
}
export declare enum Prcpt400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Prcpt400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Prcpt400ApplicationJson extends SpeakeasyBase {
    error?: Prcpt400ApplicationJsonErrorEnum;
    errorDescription?: Prcpt400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Prcpt401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Prcpt401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Prcpt401ApplicationJson extends SpeakeasyBase {
    error?: Prcpt401ApplicationJsonErrorEnum;
    errorDescription?: Prcpt401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Prcpt404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Prcpt404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Prcpt404ApplicationJson extends SpeakeasyBase {
    error?: Prcpt404ApplicationJsonErrorEnum;
    errorDescription?: Prcpt404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Prcpt500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Prcpt500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Prcpt500ApplicationJson extends SpeakeasyBase {
    error?: Prcpt500ApplicationJsonErrorEnum;
    errorDescription?: Prcpt500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Prcpt502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Prcpt502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Prcpt502ApplicationJson extends SpeakeasyBase {
    error?: Prcpt502ApplicationJsonErrorEnum;
    errorDescription?: Prcpt502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Prcpt503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Prcpt503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Prcpt503ApplicationJson extends SpeakeasyBase {
    error?: Prcpt503ApplicationJsonErrorEnum;
    errorDescription?: Prcpt503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Prcpt504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Prcpt504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Prcpt504ApplicationJson extends SpeakeasyBase {
    error?: Prcpt504ApplicationJsonErrorEnum;
    errorDescription?: Prcpt504ApplicationJsonErrorDescriptionEnum;
}
export declare class PrcptResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    prcpt400ApplicationJsonObject?: Prcpt400ApplicationJson;
    prcpt401ApplicationJsonObject?: Prcpt401ApplicationJson;
    prcpt404ApplicationJsonObject?: Prcpt404ApplicationJson;
    prcpt500ApplicationJsonObject?: Prcpt500ApplicationJson;
    prcpt502ApplicationJsonObject?: Prcpt502ApplicationJson;
    prcpt503ApplicationJsonObject?: Prcpt503ApplicationJson;
    prcpt504ApplicationJsonObject?: Prcpt504ApplicationJson;
}
