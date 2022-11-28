import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CemstRequestBodyCertificateParameters extends SpeakeasyBase {
    fullName: string;
    uid: string;
    rollno: string;
    year: string;
}
export declare enum CemstRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class CemstRequestBody extends SpeakeasyBase {
    certificateParameters?: CemstRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: CemstRequestBodyFormatEnum;
    txnId: string;
}
export declare class CemstSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Cemst400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Cemst400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Cemst400ApplicationJson extends SpeakeasyBase {
    error?: Cemst400ApplicationJsonErrorEnum;
    errorDescription?: Cemst400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Cemst401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Cemst401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Cemst401ApplicationJson extends SpeakeasyBase {
    error?: Cemst401ApplicationJsonErrorEnum;
    errorDescription?: Cemst401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Cemst404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Cemst404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Cemst404ApplicationJson extends SpeakeasyBase {
    error?: Cemst404ApplicationJsonErrorEnum;
    errorDescription?: Cemst404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Cemst500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Cemst500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Cemst500ApplicationJson extends SpeakeasyBase {
    error?: Cemst500ApplicationJsonErrorEnum;
    errorDescription?: Cemst500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Cemst502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Cemst502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Cemst502ApplicationJson extends SpeakeasyBase {
    error?: Cemst502ApplicationJsonErrorEnum;
    errorDescription?: Cemst502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Cemst503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Cemst503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Cemst503ApplicationJson extends SpeakeasyBase {
    error?: Cemst503ApplicationJsonErrorEnum;
    errorDescription?: Cemst503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Cemst504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Cemst504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Cemst504ApplicationJson extends SpeakeasyBase {
    error?: Cemst504ApplicationJsonErrorEnum;
    errorDescription?: Cemst504ApplicationJsonErrorDescriptionEnum;
}
export declare class CemstRequest extends SpeakeasyBase {
    request?: CemstRequestBody;
    security: CemstSecurity;
}
export declare class CemstResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    cemst400ApplicationJsonObject?: Cemst400ApplicationJson;
    cemst401ApplicationJsonObject?: Cemst401ApplicationJson;
    cemst404ApplicationJsonObject?: Cemst404ApplicationJson;
    cemst500ApplicationJsonObject?: Cemst500ApplicationJson;
    cemst502ApplicationJsonObject?: Cemst502ApplicationJson;
    cemst503ApplicationJsonObject?: Cemst503ApplicationJson;
    cemst504ApplicationJsonObject?: Cemst504ApplicationJson;
}
