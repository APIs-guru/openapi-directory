import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GicerRequestBodyCertificateParameters extends SpeakeasyBase {
    customerId: string;
    policyNumber: string;
    policyStartDate: string;
}
export declare enum GicerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class GicerRequestBody extends SpeakeasyBase {
    certificateParameters?: GicerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: GicerRequestBodyFormatEnum;
    txnId: string;
}
export declare class GicerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Gicer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Gicer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Gicer400ApplicationJson extends SpeakeasyBase {
    error?: Gicer400ApplicationJsonErrorEnum;
    errorDescription?: Gicer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Gicer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Gicer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Gicer401ApplicationJson extends SpeakeasyBase {
    error?: Gicer401ApplicationJsonErrorEnum;
    errorDescription?: Gicer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Gicer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Gicer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Gicer404ApplicationJson extends SpeakeasyBase {
    error?: Gicer404ApplicationJsonErrorEnum;
    errorDescription?: Gicer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Gicer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Gicer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Gicer500ApplicationJson extends SpeakeasyBase {
    error?: Gicer500ApplicationJsonErrorEnum;
    errorDescription?: Gicer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Gicer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Gicer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Gicer502ApplicationJson extends SpeakeasyBase {
    error?: Gicer502ApplicationJsonErrorEnum;
    errorDescription?: Gicer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Gicer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Gicer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Gicer503ApplicationJson extends SpeakeasyBase {
    error?: Gicer503ApplicationJsonErrorEnum;
    errorDescription?: Gicer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Gicer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Gicer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Gicer504ApplicationJson extends SpeakeasyBase {
    error?: Gicer504ApplicationJsonErrorEnum;
    errorDescription?: Gicer504ApplicationJsonErrorDescriptionEnum;
}
export declare class GicerRequest extends SpeakeasyBase {
    request?: GicerRequestBody;
    security: GicerSecurity;
}
export declare class GicerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    gicer400ApplicationJsonObject?: Gicer400ApplicationJson;
    gicer401ApplicationJsonObject?: Gicer401ApplicationJson;
    gicer404ApplicationJsonObject?: Gicer404ApplicationJson;
    gicer500ApplicationJsonObject?: Gicer500ApplicationJson;
    gicer502ApplicationJsonObject?: Gicer502ApplicationJson;
    gicer503ApplicationJsonObject?: Gicer503ApplicationJson;
    gicer504ApplicationJsonObject?: Gicer504ApplicationJson;
}
