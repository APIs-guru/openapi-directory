import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PancrRequestBodyCertificateParameters extends SpeakeasyBase {
    dob: string;
    fullName: string;
    gender: string;
    panFullName: string;
    uid: string;
    panno: string;
}
export declare enum PancrRequestBodyFormatEnum {
    Xml = "xml",
    Pdf = "pdf"
}
export declare class PancrRequestBody extends SpeakeasyBase {
    certificateParameters?: PancrRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: PancrRequestBodyFormatEnum;
    txnId: string;
}
export declare class PancrSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Pancr400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Pancr400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Pancr400ApplicationJson extends SpeakeasyBase {
    error?: Pancr400ApplicationJsonErrorEnum;
    errorDescription?: Pancr400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Pancr401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Pancr401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Pancr401ApplicationJson extends SpeakeasyBase {
    error?: Pancr401ApplicationJsonErrorEnum;
    errorDescription?: Pancr401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Pancr404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Pancr404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Pancr404ApplicationJson extends SpeakeasyBase {
    error?: Pancr404ApplicationJsonErrorEnum;
    errorDescription?: Pancr404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Pancr500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Pancr500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Pancr500ApplicationJson extends SpeakeasyBase {
    error?: Pancr500ApplicationJsonErrorEnum;
    errorDescription?: Pancr500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Pancr502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Pancr502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Pancr502ApplicationJson extends SpeakeasyBase {
    error?: Pancr502ApplicationJsonErrorEnum;
    errorDescription?: Pancr502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Pancr503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Pancr503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Pancr503ApplicationJson extends SpeakeasyBase {
    error?: Pancr503ApplicationJsonErrorEnum;
    errorDescription?: Pancr503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Pancr504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Pancr504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Pancr504ApplicationJson extends SpeakeasyBase {
    error?: Pancr504ApplicationJsonErrorEnum;
    errorDescription?: Pancr504ApplicationJsonErrorDescriptionEnum;
}
export declare class PancrRequest extends SpeakeasyBase {
    request?: PancrRequestBody;
    security: PancrSecurity;
}
export declare class PancrResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    pancr400ApplicationJsonObject?: Pancr400ApplicationJson;
    pancr401ApplicationJsonObject?: Pancr401ApplicationJson;
    pancr404ApplicationJsonObject?: Pancr404ApplicationJson;
    pancr500ApplicationJsonObject?: Pancr500ApplicationJson;
    pancr502ApplicationJsonObject?: Pancr502ApplicationJson;
    pancr503ApplicationJsonObject?: Pancr503ApplicationJson;
    pancr504ApplicationJsonObject?: Pancr504ApplicationJson;
}
