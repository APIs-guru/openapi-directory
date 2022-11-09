import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class WtrblRequestBodyCertificateParameters extends SpeakeasyBase {
    dob: string;
    fullName: string;
    regNum: string;
    uid: string;
}
export declare enum WtrblRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class WtrblRequestBody extends SpeakeasyBase {
    certificateParameters?: WtrblRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: WtrblRequestBodyFormatEnum;
    txnId: string;
}
export declare class WtrblSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class WtrblRequest extends SpeakeasyBase {
    request?: WtrblRequestBody;
    security: WtrblSecurity;
}
export declare enum Wtrbl400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Wtrbl400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Wtrbl400ApplicationJson extends SpeakeasyBase {
    error?: Wtrbl400ApplicationJsonErrorEnum;
    errorDescription?: Wtrbl400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Wtrbl401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Wtrbl401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Wtrbl401ApplicationJson extends SpeakeasyBase {
    error?: Wtrbl401ApplicationJsonErrorEnum;
    errorDescription?: Wtrbl401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Wtrbl404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Wtrbl404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Wtrbl404ApplicationJson extends SpeakeasyBase {
    error?: Wtrbl404ApplicationJsonErrorEnum;
    errorDescription?: Wtrbl404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Wtrbl500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Wtrbl500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Wtrbl500ApplicationJson extends SpeakeasyBase {
    error?: Wtrbl500ApplicationJsonErrorEnum;
    errorDescription?: Wtrbl500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Wtrbl502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Wtrbl502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Wtrbl502ApplicationJson extends SpeakeasyBase {
    error?: Wtrbl502ApplicationJsonErrorEnum;
    errorDescription?: Wtrbl502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Wtrbl503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Wtrbl503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Wtrbl503ApplicationJson extends SpeakeasyBase {
    error?: Wtrbl503ApplicationJsonErrorEnum;
    errorDescription?: Wtrbl503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Wtrbl504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Wtrbl504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Wtrbl504ApplicationJson extends SpeakeasyBase {
    error?: Wtrbl504ApplicationJsonErrorEnum;
    errorDescription?: Wtrbl504ApplicationJsonErrorDescriptionEnum;
}
export declare class WtrblResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    wtrbl400ApplicationJsonObject?: Wtrbl400ApplicationJson;
    wtrbl401ApplicationJsonObject?: Wtrbl401ApplicationJson;
    wtrbl404ApplicationJsonObject?: Wtrbl404ApplicationJson;
    wtrbl500ApplicationJsonObject?: Wtrbl500ApplicationJson;
    wtrbl502ApplicationJsonObject?: Wtrbl502ApplicationJson;
    wtrbl503ApplicationJsonObject?: Wtrbl503ApplicationJson;
    wtrbl504ApplicationJsonObject?: Wtrbl504ApplicationJson;
}
