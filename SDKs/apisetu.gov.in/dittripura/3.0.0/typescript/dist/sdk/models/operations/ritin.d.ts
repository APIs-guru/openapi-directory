import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RitinRequestBodyCertificateParameters extends SpeakeasyBase {
    refNo: string;
    tokenNo: string;
}
export declare enum RitinRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class RitinRequestBody extends SpeakeasyBase {
    certificateParameters?: RitinRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: RitinRequestBodyFormatEnum;
    txnId: string;
}
export declare class RitinSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Ritin400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Ritin400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Ritin400ApplicationJson extends SpeakeasyBase {
    error?: Ritin400ApplicationJsonErrorEnum;
    errorDescription?: Ritin400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ritin401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Ritin401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Ritin401ApplicationJson extends SpeakeasyBase {
    error?: Ritin401ApplicationJsonErrorEnum;
    errorDescription?: Ritin401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ritin404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Ritin404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Ritin404ApplicationJson extends SpeakeasyBase {
    error?: Ritin404ApplicationJsonErrorEnum;
    errorDescription?: Ritin404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ritin500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Ritin500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Ritin500ApplicationJson extends SpeakeasyBase {
    error?: Ritin500ApplicationJsonErrorEnum;
    errorDescription?: Ritin500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ritin502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Ritin502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Ritin502ApplicationJson extends SpeakeasyBase {
    error?: Ritin502ApplicationJsonErrorEnum;
    errorDescription?: Ritin502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ritin503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Ritin503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Ritin503ApplicationJson extends SpeakeasyBase {
    error?: Ritin503ApplicationJsonErrorEnum;
    errorDescription?: Ritin503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ritin504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Ritin504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Ritin504ApplicationJson extends SpeakeasyBase {
    error?: Ritin504ApplicationJsonErrorEnum;
    errorDescription?: Ritin504ApplicationJsonErrorDescriptionEnum;
}
export declare class RitinRequest extends SpeakeasyBase {
    request?: RitinRequestBody;
    security: RitinSecurity;
}
export declare class RitinResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ritin400ApplicationJsonObject?: Ritin400ApplicationJson;
    ritin401ApplicationJsonObject?: Ritin401ApplicationJson;
    ritin404ApplicationJsonObject?: Ritin404ApplicationJson;
    ritin500ApplicationJsonObject?: Ritin500ApplicationJson;
    ritin502ApplicationJsonObject?: Ritin502ApplicationJson;
    ritin503ApplicationJsonObject?: Ritin503ApplicationJson;
    ritin504ApplicationJsonObject?: Ritin504ApplicationJson;
}
