import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DtcerRequestBodyCertificateParameters extends SpeakeasyBase {
    refNo: string;
    tokenNo: string;
}
export declare enum DtcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class DtcerRequestBody extends SpeakeasyBase {
    certificateParameters?: DtcerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: DtcerRequestBodyFormatEnum;
    txnId: string;
}
export declare class DtcerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Dtcer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Dtcer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Dtcer400ApplicationJson extends SpeakeasyBase {
    error?: Dtcer400ApplicationJsonErrorEnum;
    errorDescription?: Dtcer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Dtcer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Dtcer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Dtcer401ApplicationJson extends SpeakeasyBase {
    error?: Dtcer401ApplicationJsonErrorEnum;
    errorDescription?: Dtcer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Dtcer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Dtcer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Dtcer404ApplicationJson extends SpeakeasyBase {
    error?: Dtcer404ApplicationJsonErrorEnum;
    errorDescription?: Dtcer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Dtcer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Dtcer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Dtcer500ApplicationJson extends SpeakeasyBase {
    error?: Dtcer500ApplicationJsonErrorEnum;
    errorDescription?: Dtcer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Dtcer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Dtcer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Dtcer502ApplicationJson extends SpeakeasyBase {
    error?: Dtcer502ApplicationJsonErrorEnum;
    errorDescription?: Dtcer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Dtcer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Dtcer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Dtcer503ApplicationJson extends SpeakeasyBase {
    error?: Dtcer503ApplicationJsonErrorEnum;
    errorDescription?: Dtcer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Dtcer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Dtcer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Dtcer504ApplicationJson extends SpeakeasyBase {
    error?: Dtcer504ApplicationJsonErrorEnum;
    errorDescription?: Dtcer504ApplicationJsonErrorDescriptionEnum;
}
export declare class DtcerRequest extends SpeakeasyBase {
    request?: DtcerRequestBody;
    security: DtcerSecurity;
}
export declare class DtcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    dtcer400ApplicationJsonObject?: Dtcer400ApplicationJson;
    dtcer401ApplicationJsonObject?: Dtcer401ApplicationJson;
    dtcer404ApplicationJsonObject?: Dtcer404ApplicationJson;
    dtcer500ApplicationJsonObject?: Dtcer500ApplicationJson;
    dtcer502ApplicationJsonObject?: Dtcer502ApplicationJson;
    dtcer503ApplicationJsonObject?: Dtcer503ApplicationJson;
    dtcer504ApplicationJsonObject?: Dtcer504ApplicationJson;
}
