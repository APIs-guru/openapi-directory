import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CoprgRequestBodyCertificateParameters extends SpeakeasyBase {
    udf1: string;
}
export declare enum CoprgRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class CoprgRequestBody extends SpeakeasyBase {
    certificateParameters?: CoprgRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: CoprgRequestBodyFormatEnum;
    txnId: string;
}
export declare class CoprgSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Coprg400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Coprg400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Coprg400ApplicationJson extends SpeakeasyBase {
    error?: Coprg400ApplicationJsonErrorEnum;
    errorDescription?: Coprg400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Coprg401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Coprg401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Coprg401ApplicationJson extends SpeakeasyBase {
    error?: Coprg401ApplicationJsonErrorEnum;
    errorDescription?: Coprg401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Coprg404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Coprg404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Coprg404ApplicationJson extends SpeakeasyBase {
    error?: Coprg404ApplicationJsonErrorEnum;
    errorDescription?: Coprg404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Coprg500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Coprg500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Coprg500ApplicationJson extends SpeakeasyBase {
    error?: Coprg500ApplicationJsonErrorEnum;
    errorDescription?: Coprg500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Coprg502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Coprg502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Coprg502ApplicationJson extends SpeakeasyBase {
    error?: Coprg502ApplicationJsonErrorEnum;
    errorDescription?: Coprg502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Coprg503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Coprg503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Coprg503ApplicationJson extends SpeakeasyBase {
    error?: Coprg503ApplicationJsonErrorEnum;
    errorDescription?: Coprg503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Coprg504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Coprg504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Coprg504ApplicationJson extends SpeakeasyBase {
    error?: Coprg504ApplicationJsonErrorEnum;
    errorDescription?: Coprg504ApplicationJsonErrorDescriptionEnum;
}
export declare class CoprgRequest extends SpeakeasyBase {
    request?: CoprgRequestBody;
    security: CoprgSecurity;
}
export declare class CoprgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    coprg400ApplicationJsonObject?: Coprg400ApplicationJson;
    coprg401ApplicationJsonObject?: Coprg401ApplicationJson;
    coprg404ApplicationJsonObject?: Coprg404ApplicationJson;
    coprg500ApplicationJsonObject?: Coprg500ApplicationJson;
    coprg502ApplicationJsonObject?: Coprg502ApplicationJson;
    coprg503ApplicationJsonObject?: Coprg503ApplicationJson;
    coprg504ApplicationJsonObject?: Coprg504ApplicationJson;
}
