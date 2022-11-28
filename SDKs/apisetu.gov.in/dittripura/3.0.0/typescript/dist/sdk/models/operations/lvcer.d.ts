import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LvcerRequestBodyCertificateParameters extends SpeakeasyBase {
    refNo: string;
    tokenNo: string;
}
export declare enum LvcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class LvcerRequestBody extends SpeakeasyBase {
    certificateParameters?: LvcerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: LvcerRequestBodyFormatEnum;
    txnId: string;
}
export declare class LvcerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Lvcer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Lvcer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Lvcer400ApplicationJson extends SpeakeasyBase {
    error?: Lvcer400ApplicationJsonErrorEnum;
    errorDescription?: Lvcer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Lvcer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Lvcer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Lvcer401ApplicationJson extends SpeakeasyBase {
    error?: Lvcer401ApplicationJsonErrorEnum;
    errorDescription?: Lvcer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Lvcer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Lvcer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Lvcer404ApplicationJson extends SpeakeasyBase {
    error?: Lvcer404ApplicationJsonErrorEnum;
    errorDescription?: Lvcer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Lvcer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Lvcer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Lvcer500ApplicationJson extends SpeakeasyBase {
    error?: Lvcer500ApplicationJsonErrorEnum;
    errorDescription?: Lvcer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Lvcer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Lvcer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Lvcer502ApplicationJson extends SpeakeasyBase {
    error?: Lvcer502ApplicationJsonErrorEnum;
    errorDescription?: Lvcer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Lvcer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Lvcer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Lvcer503ApplicationJson extends SpeakeasyBase {
    error?: Lvcer503ApplicationJsonErrorEnum;
    errorDescription?: Lvcer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Lvcer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Lvcer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Lvcer504ApplicationJson extends SpeakeasyBase {
    error?: Lvcer504ApplicationJsonErrorEnum;
    errorDescription?: Lvcer504ApplicationJsonErrorDescriptionEnum;
}
export declare class LvcerRequest extends SpeakeasyBase {
    request?: LvcerRequestBody;
    security: LvcerSecurity;
}
export declare class LvcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    lvcer400ApplicationJsonObject?: Lvcer400ApplicationJson;
    lvcer401ApplicationJsonObject?: Lvcer401ApplicationJson;
    lvcer404ApplicationJsonObject?: Lvcer404ApplicationJson;
    lvcer500ApplicationJsonObject?: Lvcer500ApplicationJson;
    lvcer502ApplicationJsonObject?: Lvcer502ApplicationJson;
    lvcer503ApplicationJsonObject?: Lvcer503ApplicationJson;
    lvcer504ApplicationJsonObject?: Lvcer504ApplicationJson;
}
