import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NdcerRequestBodyCertificateParameters extends SpeakeasyBase {
    certificateNumber: string;
}
export declare enum NdcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class NdcerRequestBody extends SpeakeasyBase {
    certificateParameters?: NdcerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: NdcerRequestBodyFormatEnum;
    txnId: string;
}
export declare class NdcerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Ndcer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Ndcer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Ndcer400ApplicationJson extends SpeakeasyBase {
    error?: Ndcer400ApplicationJsonErrorEnum;
    errorDescription?: Ndcer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ndcer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Ndcer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Ndcer401ApplicationJson extends SpeakeasyBase {
    error?: Ndcer401ApplicationJsonErrorEnum;
    errorDescription?: Ndcer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ndcer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Ndcer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Ndcer404ApplicationJson extends SpeakeasyBase {
    error?: Ndcer404ApplicationJsonErrorEnum;
    errorDescription?: Ndcer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ndcer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Ndcer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Ndcer500ApplicationJson extends SpeakeasyBase {
    error?: Ndcer500ApplicationJsonErrorEnum;
    errorDescription?: Ndcer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ndcer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Ndcer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Ndcer502ApplicationJson extends SpeakeasyBase {
    error?: Ndcer502ApplicationJsonErrorEnum;
    errorDescription?: Ndcer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ndcer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Ndcer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Ndcer503ApplicationJson extends SpeakeasyBase {
    error?: Ndcer503ApplicationJsonErrorEnum;
    errorDescription?: Ndcer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ndcer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Ndcer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Ndcer504ApplicationJson extends SpeakeasyBase {
    error?: Ndcer504ApplicationJsonErrorEnum;
    errorDescription?: Ndcer504ApplicationJsonErrorDescriptionEnum;
}
export declare class NdcerRequest extends SpeakeasyBase {
    request?: NdcerRequestBody;
    security: NdcerSecurity;
}
export declare class NdcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ndcer400ApplicationJsonObject?: Ndcer400ApplicationJson;
    ndcer401ApplicationJsonObject?: Ndcer401ApplicationJson;
    ndcer404ApplicationJsonObject?: Ndcer404ApplicationJson;
    ndcer500ApplicationJsonObject?: Ndcer500ApplicationJson;
    ndcer502ApplicationJsonObject?: Ndcer502ApplicationJson;
    ndcer503ApplicationJsonObject?: Ndcer503ApplicationJson;
    ndcer504ApplicationJsonObject?: Ndcer504ApplicationJson;
}
