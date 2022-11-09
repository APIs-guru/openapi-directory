import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SkmstRequestBodyCertificateParameters extends SpeakeasyBase {
    coursename: string;
    personalno: string;
    unit: string;
}
export declare enum SkmstRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class SkmstRequestBody extends SpeakeasyBase {
    certificateParameters?: SkmstRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: SkmstRequestBodyFormatEnum;
    txnId: string;
}
export declare class SkmstSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class SkmstRequest extends SpeakeasyBase {
    request?: SkmstRequestBody;
    security: SkmstSecurity;
}
export declare enum Skmst400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Skmst400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Skmst400ApplicationJson extends SpeakeasyBase {
    error?: Skmst400ApplicationJsonErrorEnum;
    errorDescription?: Skmst400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Skmst401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Skmst401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Skmst401ApplicationJson extends SpeakeasyBase {
    error?: Skmst401ApplicationJsonErrorEnum;
    errorDescription?: Skmst401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Skmst404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Skmst404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Skmst404ApplicationJson extends SpeakeasyBase {
    error?: Skmst404ApplicationJsonErrorEnum;
    errorDescription?: Skmst404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Skmst500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Skmst500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Skmst500ApplicationJson extends SpeakeasyBase {
    error?: Skmst500ApplicationJsonErrorEnum;
    errorDescription?: Skmst500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Skmst502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Skmst502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Skmst502ApplicationJson extends SpeakeasyBase {
    error?: Skmst502ApplicationJsonErrorEnum;
    errorDescription?: Skmst502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Skmst503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Skmst503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Skmst503ApplicationJson extends SpeakeasyBase {
    error?: Skmst503ApplicationJsonErrorEnum;
    errorDescription?: Skmst503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Skmst504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Skmst504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Skmst504ApplicationJson extends SpeakeasyBase {
    error?: Skmst504ApplicationJsonErrorEnum;
    errorDescription?: Skmst504ApplicationJsonErrorDescriptionEnum;
}
export declare class SkmstResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    skmst400ApplicationJsonObject?: Skmst400ApplicationJson;
    skmst401ApplicationJsonObject?: Skmst401ApplicationJson;
    skmst404ApplicationJsonObject?: Skmst404ApplicationJson;
    skmst500ApplicationJsonObject?: Skmst500ApplicationJson;
    skmst502ApplicationJsonObject?: Skmst502ApplicationJson;
    skmst503ApplicationJsonObject?: Skmst503ApplicationJson;
    skmst504ApplicationJsonObject?: Skmst504ApplicationJson;
}
