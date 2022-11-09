import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class IdcerRequestBodyCertificateParameters extends SpeakeasyBase {
    aplno: string;
    certno: string;
    sccd: string;
}
export declare enum IdcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class IdcerRequestBody extends SpeakeasyBase {
    certificateParameters?: IdcerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: IdcerRequestBodyFormatEnum;
    txnId: string;
}
export declare class IdcerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class IdcerRequest extends SpeakeasyBase {
    request?: IdcerRequestBody;
    security: IdcerSecurity;
}
export declare enum Idcer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Idcer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Idcer400ApplicationJson extends SpeakeasyBase {
    error?: Idcer400ApplicationJsonErrorEnum;
    errorDescription?: Idcer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Idcer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Idcer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Idcer401ApplicationJson extends SpeakeasyBase {
    error?: Idcer401ApplicationJsonErrorEnum;
    errorDescription?: Idcer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Idcer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Idcer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Idcer404ApplicationJson extends SpeakeasyBase {
    error?: Idcer404ApplicationJsonErrorEnum;
    errorDescription?: Idcer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Idcer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Idcer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Idcer500ApplicationJson extends SpeakeasyBase {
    error?: Idcer500ApplicationJsonErrorEnum;
    errorDescription?: Idcer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Idcer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Idcer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Idcer502ApplicationJson extends SpeakeasyBase {
    error?: Idcer502ApplicationJsonErrorEnum;
    errorDescription?: Idcer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Idcer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Idcer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Idcer503ApplicationJson extends SpeakeasyBase {
    error?: Idcer503ApplicationJsonErrorEnum;
    errorDescription?: Idcer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Idcer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Idcer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Idcer504ApplicationJson extends SpeakeasyBase {
    error?: Idcer504ApplicationJsonErrorEnum;
    errorDescription?: Idcer504ApplicationJsonErrorDescriptionEnum;
}
export declare class IdcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    idcer400ApplicationJsonObject?: Idcer400ApplicationJson;
    idcer401ApplicationJsonObject?: Idcer401ApplicationJson;
    idcer404ApplicationJsonObject?: Idcer404ApplicationJson;
    idcer500ApplicationJsonObject?: Idcer500ApplicationJson;
    idcer502ApplicationJsonObject?: Idcer502ApplicationJson;
    idcer503ApplicationJsonObject?: Idcer503ApplicationJson;
    idcer504ApplicationJsonObject?: Idcer504ApplicationJson;
}
