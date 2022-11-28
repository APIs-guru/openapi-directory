import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ImcerRequestBodyCertificateParameters extends SpeakeasyBase {
    aplno: string;
    certno: string;
    sccd: string;
}
export declare enum ImcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class ImcerRequestBody extends SpeakeasyBase {
    certificateParameters?: ImcerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: ImcerRequestBodyFormatEnum;
    txnId: string;
}
export declare class ImcerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Imcer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Imcer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Imcer400ApplicationJson extends SpeakeasyBase {
    error?: Imcer400ApplicationJsonErrorEnum;
    errorDescription?: Imcer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Imcer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Imcer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Imcer401ApplicationJson extends SpeakeasyBase {
    error?: Imcer401ApplicationJsonErrorEnum;
    errorDescription?: Imcer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Imcer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Imcer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Imcer404ApplicationJson extends SpeakeasyBase {
    error?: Imcer404ApplicationJsonErrorEnum;
    errorDescription?: Imcer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Imcer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Imcer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Imcer500ApplicationJson extends SpeakeasyBase {
    error?: Imcer500ApplicationJsonErrorEnum;
    errorDescription?: Imcer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Imcer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Imcer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Imcer502ApplicationJson extends SpeakeasyBase {
    error?: Imcer502ApplicationJsonErrorEnum;
    errorDescription?: Imcer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Imcer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Imcer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Imcer503ApplicationJson extends SpeakeasyBase {
    error?: Imcer503ApplicationJsonErrorEnum;
    errorDescription?: Imcer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Imcer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Imcer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Imcer504ApplicationJson extends SpeakeasyBase {
    error?: Imcer504ApplicationJsonErrorEnum;
    errorDescription?: Imcer504ApplicationJsonErrorDescriptionEnum;
}
export declare class ImcerRequest extends SpeakeasyBase {
    request?: ImcerRequestBody;
    security: ImcerSecurity;
}
export declare class ImcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    imcer400ApplicationJsonObject?: Imcer400ApplicationJson;
    imcer401ApplicationJsonObject?: Imcer401ApplicationJson;
    imcer404ApplicationJsonObject?: Imcer404ApplicationJson;
    imcer500ApplicationJsonObject?: Imcer500ApplicationJson;
    imcer502ApplicationJsonObject?: Imcer502ApplicationJson;
    imcer503ApplicationJsonObject?: Imcer503ApplicationJson;
    imcer504ApplicationJsonObject?: Imcer504ApplicationJson;
}
