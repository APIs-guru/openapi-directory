import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HmipcRequestBodyCertificateParameters extends SpeakeasyBase {
    policyNo: string;
    val: string;
    verification: string;
}
export declare enum HmipcRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class HmipcRequestBody extends SpeakeasyBase {
    certificateParameters?: HmipcRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: HmipcRequestBodyFormatEnum;
    txnId: string;
}
export declare class HmipcSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Hmipc400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Hmipc400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Hmipc400ApplicationJson extends SpeakeasyBase {
    error?: Hmipc400ApplicationJsonErrorEnum;
    errorDescription?: Hmipc400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Hmipc401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Hmipc401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Hmipc401ApplicationJson extends SpeakeasyBase {
    error?: Hmipc401ApplicationJsonErrorEnum;
    errorDescription?: Hmipc401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Hmipc404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Hmipc404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Hmipc404ApplicationJson extends SpeakeasyBase {
    error?: Hmipc404ApplicationJsonErrorEnum;
    errorDescription?: Hmipc404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Hmipc500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Hmipc500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Hmipc500ApplicationJson extends SpeakeasyBase {
    error?: Hmipc500ApplicationJsonErrorEnum;
    errorDescription?: Hmipc500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Hmipc502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Hmipc502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Hmipc502ApplicationJson extends SpeakeasyBase {
    error?: Hmipc502ApplicationJsonErrorEnum;
    errorDescription?: Hmipc502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Hmipc503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Hmipc503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Hmipc503ApplicationJson extends SpeakeasyBase {
    error?: Hmipc503ApplicationJsonErrorEnum;
    errorDescription?: Hmipc503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Hmipc504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Hmipc504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Hmipc504ApplicationJson extends SpeakeasyBase {
    error?: Hmipc504ApplicationJsonErrorEnum;
    errorDescription?: Hmipc504ApplicationJsonErrorDescriptionEnum;
}
export declare class HmipcRequest extends SpeakeasyBase {
    request?: HmipcRequestBody;
    security: HmipcSecurity;
}
export declare class HmipcResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    hmipc400ApplicationJsonObject?: Hmipc400ApplicationJson;
    hmipc401ApplicationJsonObject?: Hmipc401ApplicationJson;
    hmipc404ApplicationJsonObject?: Hmipc404ApplicationJson;
    hmipc500ApplicationJsonObject?: Hmipc500ApplicationJson;
    hmipc502ApplicationJsonObject?: Hmipc502ApplicationJson;
    hmipc503ApplicationJsonObject?: Hmipc503ApplicationJson;
    hmipc504ApplicationJsonObject?: Hmipc504ApplicationJson;
}
