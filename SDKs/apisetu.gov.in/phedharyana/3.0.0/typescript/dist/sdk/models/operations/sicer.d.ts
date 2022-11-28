import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SicerRequestBodyCertificateParameters extends SpeakeasyBase {
    name: string;
    consumerId: string;
}
export declare enum SicerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class SicerRequestBody extends SpeakeasyBase {
    certificateParameters?: SicerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: SicerRequestBodyFormatEnum;
    txnId: string;
}
export declare class SicerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Sicer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Sicer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Sicer400ApplicationJson extends SpeakeasyBase {
    error?: Sicer400ApplicationJsonErrorEnum;
    errorDescription?: Sicer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Sicer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Sicer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Sicer401ApplicationJson extends SpeakeasyBase {
    error?: Sicer401ApplicationJsonErrorEnum;
    errorDescription?: Sicer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Sicer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Sicer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Sicer404ApplicationJson extends SpeakeasyBase {
    error?: Sicer404ApplicationJsonErrorEnum;
    errorDescription?: Sicer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Sicer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Sicer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Sicer500ApplicationJson extends SpeakeasyBase {
    error?: Sicer500ApplicationJsonErrorEnum;
    errorDescription?: Sicer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Sicer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Sicer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Sicer502ApplicationJson extends SpeakeasyBase {
    error?: Sicer502ApplicationJsonErrorEnum;
    errorDescription?: Sicer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Sicer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Sicer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Sicer503ApplicationJson extends SpeakeasyBase {
    error?: Sicer503ApplicationJsonErrorEnum;
    errorDescription?: Sicer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Sicer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Sicer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Sicer504ApplicationJson extends SpeakeasyBase {
    error?: Sicer504ApplicationJsonErrorEnum;
    errorDescription?: Sicer504ApplicationJsonErrorDescriptionEnum;
}
export declare class SicerRequest extends SpeakeasyBase {
    request?: SicerRequestBody;
    security: SicerSecurity;
}
export declare class SicerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    sicer400ApplicationJsonObject?: Sicer400ApplicationJson;
    sicer401ApplicationJsonObject?: Sicer401ApplicationJson;
    sicer404ApplicationJsonObject?: Sicer404ApplicationJson;
    sicer500ApplicationJsonObject?: Sicer500ApplicationJson;
    sicer502ApplicationJsonObject?: Sicer502ApplicationJson;
    sicer503ApplicationJsonObject?: Sicer503ApplicationJson;
    sicer504ApplicationJsonObject?: Sicer504ApplicationJson;
}
