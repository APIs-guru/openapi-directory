import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DpicrRequestBodyCertificateParameters extends SpeakeasyBase {
    udf1: string;
    uid: string;
}
export declare enum DpicrRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class DpicrRequestBody extends SpeakeasyBase {
    certificateParameters?: DpicrRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: DpicrRequestBodyFormatEnum;
    txnId: string;
}
export declare class DpicrSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Dpicr400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Dpicr400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Dpicr400ApplicationJson extends SpeakeasyBase {
    error?: Dpicr400ApplicationJsonErrorEnum;
    errorDescription?: Dpicr400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Dpicr401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Dpicr401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Dpicr401ApplicationJson extends SpeakeasyBase {
    error?: Dpicr401ApplicationJsonErrorEnum;
    errorDescription?: Dpicr401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Dpicr404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Dpicr404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Dpicr404ApplicationJson extends SpeakeasyBase {
    error?: Dpicr404ApplicationJsonErrorEnum;
    errorDescription?: Dpicr404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Dpicr500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Dpicr500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Dpicr500ApplicationJson extends SpeakeasyBase {
    error?: Dpicr500ApplicationJsonErrorEnum;
    errorDescription?: Dpicr500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Dpicr502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Dpicr502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Dpicr502ApplicationJson extends SpeakeasyBase {
    error?: Dpicr502ApplicationJsonErrorEnum;
    errorDescription?: Dpicr502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Dpicr503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Dpicr503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Dpicr503ApplicationJson extends SpeakeasyBase {
    error?: Dpicr503ApplicationJsonErrorEnum;
    errorDescription?: Dpicr503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Dpicr504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Dpicr504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Dpicr504ApplicationJson extends SpeakeasyBase {
    error?: Dpicr504ApplicationJsonErrorEnum;
    errorDescription?: Dpicr504ApplicationJsonErrorDescriptionEnum;
}
export declare class DpicrRequest extends SpeakeasyBase {
    request?: DpicrRequestBody;
    security: DpicrSecurity;
}
export declare class DpicrResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    dpicr400ApplicationJsonObject?: Dpicr400ApplicationJson;
    dpicr401ApplicationJsonObject?: Dpicr401ApplicationJson;
    dpicr404ApplicationJsonObject?: Dpicr404ApplicationJson;
    dpicr500ApplicationJsonObject?: Dpicr500ApplicationJson;
    dpicr502ApplicationJsonObject?: Dpicr502ApplicationJson;
    dpicr503ApplicationJsonObject?: Dpicr503ApplicationJson;
    dpicr504ApplicationJsonObject?: Dpicr504ApplicationJson;
}
