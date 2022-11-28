import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AlsblRequestBodyCertificateParameters extends SpeakeasyBase {
    refNo: string;
    tokenNo: string;
}
export declare enum AlsblRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class AlsblRequestBody extends SpeakeasyBase {
    certificateParameters?: AlsblRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: AlsblRequestBodyFormatEnum;
    txnId: string;
}
export declare class AlsblSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Alsbl400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Alsbl400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Alsbl400ApplicationJson extends SpeakeasyBase {
    error?: Alsbl400ApplicationJsonErrorEnum;
    errorDescription?: Alsbl400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Alsbl401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Alsbl401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Alsbl401ApplicationJson extends SpeakeasyBase {
    error?: Alsbl401ApplicationJsonErrorEnum;
    errorDescription?: Alsbl401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Alsbl404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Alsbl404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Alsbl404ApplicationJson extends SpeakeasyBase {
    error?: Alsbl404ApplicationJsonErrorEnum;
    errorDescription?: Alsbl404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Alsbl500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Alsbl500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Alsbl500ApplicationJson extends SpeakeasyBase {
    error?: Alsbl500ApplicationJsonErrorEnum;
    errorDescription?: Alsbl500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Alsbl502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Alsbl502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Alsbl502ApplicationJson extends SpeakeasyBase {
    error?: Alsbl502ApplicationJsonErrorEnum;
    errorDescription?: Alsbl502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Alsbl503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Alsbl503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Alsbl503ApplicationJson extends SpeakeasyBase {
    error?: Alsbl503ApplicationJsonErrorEnum;
    errorDescription?: Alsbl503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Alsbl504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Alsbl504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Alsbl504ApplicationJson extends SpeakeasyBase {
    error?: Alsbl504ApplicationJsonErrorEnum;
    errorDescription?: Alsbl504ApplicationJsonErrorDescriptionEnum;
}
export declare class AlsblRequest extends SpeakeasyBase {
    request?: AlsblRequestBody;
    security: AlsblSecurity;
}
export declare class AlsblResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    alsbl400ApplicationJsonObject?: Alsbl400ApplicationJson;
    alsbl401ApplicationJsonObject?: Alsbl401ApplicationJson;
    alsbl404ApplicationJsonObject?: Alsbl404ApplicationJson;
    alsbl500ApplicationJsonObject?: Alsbl500ApplicationJson;
    alsbl502ApplicationJsonObject?: Alsbl502ApplicationJson;
    alsbl503ApplicationJsonObject?: Alsbl503ApplicationJson;
    alsbl504ApplicationJsonObject?: Alsbl504ApplicationJson;
}
