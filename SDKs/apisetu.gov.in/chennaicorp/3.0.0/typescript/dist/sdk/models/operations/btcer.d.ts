import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class BtcerRequestBodyCertificateParameters extends SpeakeasyBase {
    dateofbirth: string;
    regno: string;
}
export declare enum BtcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class BtcerRequestBody extends SpeakeasyBase {
    certificateParameters?: BtcerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: BtcerRequestBodyFormatEnum;
    txnId: string;
}
export declare class BtcerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class BtcerRequest extends SpeakeasyBase {
    request?: BtcerRequestBody;
    security: BtcerSecurity;
}
export declare enum Btcer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Btcer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Btcer400ApplicationJson extends SpeakeasyBase {
    error?: Btcer400ApplicationJsonErrorEnum;
    errorDescription?: Btcer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Btcer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Btcer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Btcer401ApplicationJson extends SpeakeasyBase {
    error?: Btcer401ApplicationJsonErrorEnum;
    errorDescription?: Btcer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Btcer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Btcer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Btcer404ApplicationJson extends SpeakeasyBase {
    error?: Btcer404ApplicationJsonErrorEnum;
    errorDescription?: Btcer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Btcer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Btcer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Btcer500ApplicationJson extends SpeakeasyBase {
    error?: Btcer500ApplicationJsonErrorEnum;
    errorDescription?: Btcer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Btcer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Btcer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Btcer502ApplicationJson extends SpeakeasyBase {
    error?: Btcer502ApplicationJsonErrorEnum;
    errorDescription?: Btcer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Btcer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Btcer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Btcer503ApplicationJson extends SpeakeasyBase {
    error?: Btcer503ApplicationJsonErrorEnum;
    errorDescription?: Btcer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Btcer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Btcer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Btcer504ApplicationJson extends SpeakeasyBase {
    error?: Btcer504ApplicationJsonErrorEnum;
    errorDescription?: Btcer504ApplicationJsonErrorDescriptionEnum;
}
export declare class BtcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    btcer400ApplicationJsonObject?: Btcer400ApplicationJson;
    btcer401ApplicationJsonObject?: Btcer401ApplicationJson;
    btcer404ApplicationJsonObject?: Btcer404ApplicationJson;
    btcer500ApplicationJsonObject?: Btcer500ApplicationJson;
    btcer502ApplicationJsonObject?: Btcer502ApplicationJson;
    btcer503ApplicationJsonObject?: Btcer503ApplicationJson;
    btcer504ApplicationJsonObject?: Btcer504ApplicationJson;
}
