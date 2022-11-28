import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DccerRequestBodyCertificateParameters extends SpeakeasyBase {
    name: string;
    refNo: string;
}
export declare enum DccerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class DccerRequestBody extends SpeakeasyBase {
    certificateParameters?: DccerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: DccerRequestBodyFormatEnum;
    txnId: string;
}
export declare class DccerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Dccer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Dccer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Dccer400ApplicationJson extends SpeakeasyBase {
    error?: Dccer400ApplicationJsonErrorEnum;
    errorDescription?: Dccer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Dccer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Dccer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Dccer401ApplicationJson extends SpeakeasyBase {
    error?: Dccer401ApplicationJsonErrorEnum;
    errorDescription?: Dccer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Dccer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Dccer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Dccer404ApplicationJson extends SpeakeasyBase {
    error?: Dccer404ApplicationJsonErrorEnum;
    errorDescription?: Dccer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Dccer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Dccer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Dccer500ApplicationJson extends SpeakeasyBase {
    error?: Dccer500ApplicationJsonErrorEnum;
    errorDescription?: Dccer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Dccer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Dccer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Dccer502ApplicationJson extends SpeakeasyBase {
    error?: Dccer502ApplicationJsonErrorEnum;
    errorDescription?: Dccer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Dccer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Dccer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Dccer503ApplicationJson extends SpeakeasyBase {
    error?: Dccer503ApplicationJsonErrorEnum;
    errorDescription?: Dccer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Dccer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Dccer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Dccer504ApplicationJson extends SpeakeasyBase {
    error?: Dccer504ApplicationJsonErrorEnum;
    errorDescription?: Dccer504ApplicationJsonErrorDescriptionEnum;
}
export declare class DccerRequest extends SpeakeasyBase {
    request?: DccerRequestBody;
    security: DccerSecurity;
}
export declare class DccerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    dccer400ApplicationJsonObject?: Dccer400ApplicationJson;
    dccer401ApplicationJsonObject?: Dccer401ApplicationJson;
    dccer404ApplicationJsonObject?: Dccer404ApplicationJson;
    dccer500ApplicationJsonObject?: Dccer500ApplicationJson;
    dccer502ApplicationJsonObject?: Dccer502ApplicationJson;
    dccer503ApplicationJsonObject?: Dccer503ApplicationJson;
    dccer504ApplicationJsonObject?: Dccer504ApplicationJson;
}
