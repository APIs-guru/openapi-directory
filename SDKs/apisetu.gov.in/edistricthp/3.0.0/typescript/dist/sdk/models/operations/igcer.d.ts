import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IgcerRequestBodyCertificateParameters extends SpeakeasyBase {
    udf1: string;
}
export declare enum IgcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class IgcerRequestBody extends SpeakeasyBase {
    certificateParameters?: IgcerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: IgcerRequestBodyFormatEnum;
    txnId: string;
}
export declare class IgcerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Igcer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Igcer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Igcer400ApplicationJson extends SpeakeasyBase {
    error?: Igcer400ApplicationJsonErrorEnum;
    errorDescription?: Igcer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Igcer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Igcer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Igcer401ApplicationJson extends SpeakeasyBase {
    error?: Igcer401ApplicationJsonErrorEnum;
    errorDescription?: Igcer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Igcer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Igcer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Igcer404ApplicationJson extends SpeakeasyBase {
    error?: Igcer404ApplicationJsonErrorEnum;
    errorDescription?: Igcer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Igcer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Igcer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Igcer500ApplicationJson extends SpeakeasyBase {
    error?: Igcer500ApplicationJsonErrorEnum;
    errorDescription?: Igcer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Igcer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Igcer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Igcer502ApplicationJson extends SpeakeasyBase {
    error?: Igcer502ApplicationJsonErrorEnum;
    errorDescription?: Igcer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Igcer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Igcer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Igcer503ApplicationJson extends SpeakeasyBase {
    error?: Igcer503ApplicationJsonErrorEnum;
    errorDescription?: Igcer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Igcer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Igcer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Igcer504ApplicationJson extends SpeakeasyBase {
    error?: Igcer504ApplicationJsonErrorEnum;
    errorDescription?: Igcer504ApplicationJsonErrorDescriptionEnum;
}
export declare class IgcerRequest extends SpeakeasyBase {
    request?: IgcerRequestBody;
    security: IgcerSecurity;
}
export declare class IgcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    igcer400ApplicationJsonObject?: Igcer400ApplicationJson;
    igcer401ApplicationJsonObject?: Igcer401ApplicationJson;
    igcer404ApplicationJsonObject?: Igcer404ApplicationJson;
    igcer500ApplicationJsonObject?: Igcer500ApplicationJson;
    igcer502ApplicationJsonObject?: Igcer502ApplicationJson;
    igcer503ApplicationJsonObject?: Igcer503ApplicationJson;
    igcer504ApplicationJsonObject?: Igcer504ApplicationJson;
}
