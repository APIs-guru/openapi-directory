import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DrvlcRequestBodyCertificateParameters extends SpeakeasyBase {
    dob: string;
    fullName: string;
    dlno: string;
}
export declare enum DrvlcRequestBodyFormatEnum {
    Xml = "xml",
    Pdf = "pdf"
}
export declare class DrvlcRequestBody extends SpeakeasyBase {
    certificateParameters?: DrvlcRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: DrvlcRequestBodyFormatEnum;
    txnId: string;
}
export declare class DrvlcSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Drvlc400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Drvlc400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Drvlc400ApplicationJson extends SpeakeasyBase {
    error?: Drvlc400ApplicationJsonErrorEnum;
    errorDescription?: Drvlc400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Drvlc401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Drvlc401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Drvlc401ApplicationJson extends SpeakeasyBase {
    error?: Drvlc401ApplicationJsonErrorEnum;
    errorDescription?: Drvlc401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Drvlc404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Drvlc404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Drvlc404ApplicationJson extends SpeakeasyBase {
    error?: Drvlc404ApplicationJsonErrorEnum;
    errorDescription?: Drvlc404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Drvlc500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Drvlc500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Drvlc500ApplicationJson extends SpeakeasyBase {
    error?: Drvlc500ApplicationJsonErrorEnum;
    errorDescription?: Drvlc500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Drvlc502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Drvlc502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Drvlc502ApplicationJson extends SpeakeasyBase {
    error?: Drvlc502ApplicationJsonErrorEnum;
    errorDescription?: Drvlc502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Drvlc503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Drvlc503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Drvlc503ApplicationJson extends SpeakeasyBase {
    error?: Drvlc503ApplicationJsonErrorEnum;
    errorDescription?: Drvlc503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Drvlc504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Drvlc504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Drvlc504ApplicationJson extends SpeakeasyBase {
    error?: Drvlc504ApplicationJsonErrorEnum;
    errorDescription?: Drvlc504ApplicationJsonErrorDescriptionEnum;
}
export declare class DrvlcRequest extends SpeakeasyBase {
    request?: DrvlcRequestBody;
    security: DrvlcSecurity;
}
export declare class DrvlcResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    drvlc400ApplicationJsonObject?: Drvlc400ApplicationJson;
    drvlc401ApplicationJsonObject?: Drvlc401ApplicationJson;
    drvlc404ApplicationJsonObject?: Drvlc404ApplicationJson;
    drvlc500ApplicationJsonObject?: Drvlc500ApplicationJson;
    drvlc502ApplicationJsonObject?: Drvlc502ApplicationJson;
    drvlc503ApplicationJsonObject?: Drvlc503ApplicationJson;
    drvlc504ApplicationJsonObject?: Drvlc504ApplicationJson;
}
