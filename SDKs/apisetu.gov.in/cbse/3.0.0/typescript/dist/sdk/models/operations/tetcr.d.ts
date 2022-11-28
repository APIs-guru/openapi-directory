import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TetcrRequestBodyCertificateParameters extends SpeakeasyBase {
    fullName: string;
    rollno: string;
    yearMonth: string;
}
export declare enum TetcrRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class TetcrRequestBody extends SpeakeasyBase {
    certificateParameters?: TetcrRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: TetcrRequestBodyFormatEnum;
    txnId: string;
}
export declare class TetcrSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Tetcr400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Tetcr400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Tetcr400ApplicationJson extends SpeakeasyBase {
    error?: Tetcr400ApplicationJsonErrorEnum;
    errorDescription?: Tetcr400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Tetcr401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Tetcr401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Tetcr401ApplicationJson extends SpeakeasyBase {
    error?: Tetcr401ApplicationJsonErrorEnum;
    errorDescription?: Tetcr401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Tetcr404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Tetcr404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Tetcr404ApplicationJson extends SpeakeasyBase {
    error?: Tetcr404ApplicationJsonErrorEnum;
    errorDescription?: Tetcr404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Tetcr500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Tetcr500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Tetcr500ApplicationJson extends SpeakeasyBase {
    error?: Tetcr500ApplicationJsonErrorEnum;
    errorDescription?: Tetcr500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Tetcr502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Tetcr502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Tetcr502ApplicationJson extends SpeakeasyBase {
    error?: Tetcr502ApplicationJsonErrorEnum;
    errorDescription?: Tetcr502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Tetcr503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Tetcr503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Tetcr503ApplicationJson extends SpeakeasyBase {
    error?: Tetcr503ApplicationJsonErrorEnum;
    errorDescription?: Tetcr503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Tetcr504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Tetcr504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Tetcr504ApplicationJson extends SpeakeasyBase {
    error?: Tetcr504ApplicationJsonErrorEnum;
    errorDescription?: Tetcr504ApplicationJsonErrorDescriptionEnum;
}
export declare class TetcrRequest extends SpeakeasyBase {
    request?: TetcrRequestBody;
    security: TetcrSecurity;
}
export declare class TetcrResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tetcr400ApplicationJsonObject?: Tetcr400ApplicationJson;
    tetcr401ApplicationJsonObject?: Tetcr401ApplicationJson;
    tetcr404ApplicationJsonObject?: Tetcr404ApplicationJson;
    tetcr500ApplicationJsonObject?: Tetcr500ApplicationJson;
    tetcr502ApplicationJsonObject?: Tetcr502ApplicationJson;
    tetcr503ApplicationJsonObject?: Tetcr503ApplicationJson;
    tetcr504ApplicationJsonObject?: Tetcr504ApplicationJson;
}
