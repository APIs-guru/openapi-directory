import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TetmsRequestBodyCertificateParameters extends SpeakeasyBase {
    fullName: string;
    rollno: string;
    yearMonth: string;
}
export declare enum TetmsRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class TetmsRequestBody extends SpeakeasyBase {
    certificateParameters?: TetmsRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: TetmsRequestBodyFormatEnum;
    txnId: string;
}
export declare class TetmsSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Tetms400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Tetms400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Tetms400ApplicationJson extends SpeakeasyBase {
    error?: Tetms400ApplicationJsonErrorEnum;
    errorDescription?: Tetms400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Tetms401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Tetms401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Tetms401ApplicationJson extends SpeakeasyBase {
    error?: Tetms401ApplicationJsonErrorEnum;
    errorDescription?: Tetms401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Tetms404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Tetms404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Tetms404ApplicationJson extends SpeakeasyBase {
    error?: Tetms404ApplicationJsonErrorEnum;
    errorDescription?: Tetms404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Tetms500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Tetms500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Tetms500ApplicationJson extends SpeakeasyBase {
    error?: Tetms500ApplicationJsonErrorEnum;
    errorDescription?: Tetms500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Tetms502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Tetms502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Tetms502ApplicationJson extends SpeakeasyBase {
    error?: Tetms502ApplicationJsonErrorEnum;
    errorDescription?: Tetms502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Tetms503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Tetms503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Tetms503ApplicationJson extends SpeakeasyBase {
    error?: Tetms503ApplicationJsonErrorEnum;
    errorDescription?: Tetms503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Tetms504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Tetms504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Tetms504ApplicationJson extends SpeakeasyBase {
    error?: Tetms504ApplicationJsonErrorEnum;
    errorDescription?: Tetms504ApplicationJsonErrorDescriptionEnum;
}
export declare class TetmsRequest extends SpeakeasyBase {
    request?: TetmsRequestBody;
    security: TetmsSecurity;
}
export declare class TetmsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tetms400ApplicationJsonObject?: Tetms400ApplicationJson;
    tetms401ApplicationJsonObject?: Tetms401ApplicationJson;
    tetms404ApplicationJsonObject?: Tetms404ApplicationJson;
    tetms500ApplicationJsonObject?: Tetms500ApplicationJson;
    tetms502ApplicationJsonObject?: Tetms502ApplicationJson;
    tetms503ApplicationJsonObject?: Tetms503ApplicationJson;
    tetms504ApplicationJsonObject?: Tetms504ApplicationJson;
}
