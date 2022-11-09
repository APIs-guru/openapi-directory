import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class VhtaxRequestBodyCertificateParameters extends SpeakeasyBase {
    fullName: string;
    uid: string;
    chasisNo: string;
    regNo: string;
    swdName: string;
}
export declare enum VhtaxRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class VhtaxRequestBody extends SpeakeasyBase {
    certificateParameters?: VhtaxRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: VhtaxRequestBodyFormatEnum;
    txnId: string;
}
export declare class VhtaxSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class VhtaxRequest extends SpeakeasyBase {
    request?: VhtaxRequestBody;
    security: VhtaxSecurity;
}
export declare enum Vhtax400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Vhtax400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Vhtax400ApplicationJson extends SpeakeasyBase {
    error?: Vhtax400ApplicationJsonErrorEnum;
    errorDescription?: Vhtax400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Vhtax401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Vhtax401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Vhtax401ApplicationJson extends SpeakeasyBase {
    error?: Vhtax401ApplicationJsonErrorEnum;
    errorDescription?: Vhtax401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Vhtax404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Vhtax404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Vhtax404ApplicationJson extends SpeakeasyBase {
    error?: Vhtax404ApplicationJsonErrorEnum;
    errorDescription?: Vhtax404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Vhtax500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Vhtax500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Vhtax500ApplicationJson extends SpeakeasyBase {
    error?: Vhtax500ApplicationJsonErrorEnum;
    errorDescription?: Vhtax500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Vhtax502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Vhtax502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Vhtax502ApplicationJson extends SpeakeasyBase {
    error?: Vhtax502ApplicationJsonErrorEnum;
    errorDescription?: Vhtax502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Vhtax503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Vhtax503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Vhtax503ApplicationJson extends SpeakeasyBase {
    error?: Vhtax503ApplicationJsonErrorEnum;
    errorDescription?: Vhtax503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Vhtax504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Vhtax504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Vhtax504ApplicationJson extends SpeakeasyBase {
    error?: Vhtax504ApplicationJsonErrorEnum;
    errorDescription?: Vhtax504ApplicationJsonErrorDescriptionEnum;
}
export declare class VhtaxResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    vhtax400ApplicationJsonObject?: Vhtax400ApplicationJson;
    vhtax401ApplicationJsonObject?: Vhtax401ApplicationJson;
    vhtax404ApplicationJsonObject?: Vhtax404ApplicationJson;
    vhtax500ApplicationJsonObject?: Vhtax500ApplicationJson;
    vhtax502ApplicationJsonObject?: Vhtax502ApplicationJson;
    vhtax503ApplicationJsonObject?: Vhtax503ApplicationJson;
    vhtax504ApplicationJsonObject?: Vhtax504ApplicationJson;
}
