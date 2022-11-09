import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DncerRequestBodyCertificateParameters extends SpeakeasyBase {
    refNo: string;
    tokenNo: string;
}
export declare enum DncerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class DncerRequestBody extends SpeakeasyBase {
    certificateParameters?: DncerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: DncerRequestBodyFormatEnum;
    txnId: string;
}
export declare class DncerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class DncerRequest extends SpeakeasyBase {
    request?: DncerRequestBody;
    security: DncerSecurity;
}
export declare enum Dncer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Dncer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Dncer400ApplicationJson extends SpeakeasyBase {
    error?: Dncer400ApplicationJsonErrorEnum;
    errorDescription?: Dncer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Dncer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Dncer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Dncer401ApplicationJson extends SpeakeasyBase {
    error?: Dncer401ApplicationJsonErrorEnum;
    errorDescription?: Dncer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Dncer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Dncer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Dncer404ApplicationJson extends SpeakeasyBase {
    error?: Dncer404ApplicationJsonErrorEnum;
    errorDescription?: Dncer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Dncer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Dncer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Dncer500ApplicationJson extends SpeakeasyBase {
    error?: Dncer500ApplicationJsonErrorEnum;
    errorDescription?: Dncer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Dncer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Dncer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Dncer502ApplicationJson extends SpeakeasyBase {
    error?: Dncer502ApplicationJsonErrorEnum;
    errorDescription?: Dncer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Dncer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Dncer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Dncer503ApplicationJson extends SpeakeasyBase {
    error?: Dncer503ApplicationJsonErrorEnum;
    errorDescription?: Dncer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Dncer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Dncer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Dncer504ApplicationJson extends SpeakeasyBase {
    error?: Dncer504ApplicationJsonErrorEnum;
    errorDescription?: Dncer504ApplicationJsonErrorDescriptionEnum;
}
export declare class DncerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    dncer400ApplicationJsonObject?: Dncer400ApplicationJson;
    dncer401ApplicationJsonObject?: Dncer401ApplicationJson;
    dncer404ApplicationJsonObject?: Dncer404ApplicationJson;
    dncer500ApplicationJsonObject?: Dncer500ApplicationJson;
    dncer502ApplicationJsonObject?: Dncer502ApplicationJson;
    dncer503ApplicationJsonObject?: Dncer503ApplicationJson;
    dncer504ApplicationJsonObject?: Dncer504ApplicationJson;
}
