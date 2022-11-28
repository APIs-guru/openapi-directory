import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EtcerRequestBodyCertificateParameters extends SpeakeasyBase {
    uniqueCode: string;
}
export declare enum EtcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class EtcerRequestBody extends SpeakeasyBase {
    certificateParameters?: EtcerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: EtcerRequestBodyFormatEnum;
    txnId: string;
}
export declare class EtcerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Etcer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Etcer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Etcer400ApplicationJson extends SpeakeasyBase {
    error?: Etcer400ApplicationJsonErrorEnum;
    errorDescription?: Etcer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Etcer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Etcer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Etcer401ApplicationJson extends SpeakeasyBase {
    error?: Etcer401ApplicationJsonErrorEnum;
    errorDescription?: Etcer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Etcer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Etcer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Etcer404ApplicationJson extends SpeakeasyBase {
    error?: Etcer404ApplicationJsonErrorEnum;
    errorDescription?: Etcer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Etcer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Etcer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Etcer500ApplicationJson extends SpeakeasyBase {
    error?: Etcer500ApplicationJsonErrorEnum;
    errorDescription?: Etcer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Etcer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Etcer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Etcer502ApplicationJson extends SpeakeasyBase {
    error?: Etcer502ApplicationJsonErrorEnum;
    errorDescription?: Etcer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Etcer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Etcer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Etcer503ApplicationJson extends SpeakeasyBase {
    error?: Etcer503ApplicationJsonErrorEnum;
    errorDescription?: Etcer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Etcer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Etcer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Etcer504ApplicationJson extends SpeakeasyBase {
    error?: Etcer504ApplicationJsonErrorEnum;
    errorDescription?: Etcer504ApplicationJsonErrorDescriptionEnum;
}
export declare class EtcerRequest extends SpeakeasyBase {
    request?: EtcerRequestBody;
    security: EtcerSecurity;
}
export declare class EtcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    etcer400ApplicationJsonObject?: Etcer400ApplicationJson;
    etcer401ApplicationJsonObject?: Etcer401ApplicationJson;
    etcer404ApplicationJsonObject?: Etcer404ApplicationJson;
    etcer500ApplicationJsonObject?: Etcer500ApplicationJson;
    etcer502ApplicationJsonObject?: Etcer502ApplicationJson;
    etcer503ApplicationJsonObject?: Etcer503ApplicationJson;
    etcer504ApplicationJsonObject?: Etcer504ApplicationJson;
}
