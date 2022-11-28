import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HlipcRequestBodyCertificateParameters extends SpeakeasyBase {
    customerId: string;
    policyNumber: string;
    policyStartDate: string;
}
export declare enum HlipcRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class HlipcRequestBody extends SpeakeasyBase {
    certificateParameters?: HlipcRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: HlipcRequestBodyFormatEnum;
    txnId: string;
}
export declare class HlipcSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Hlipc400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Hlipc400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Hlipc400ApplicationJson extends SpeakeasyBase {
    error?: Hlipc400ApplicationJsonErrorEnum;
    errorDescription?: Hlipc400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Hlipc401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Hlipc401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Hlipc401ApplicationJson extends SpeakeasyBase {
    error?: Hlipc401ApplicationJsonErrorEnum;
    errorDescription?: Hlipc401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Hlipc404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Hlipc404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Hlipc404ApplicationJson extends SpeakeasyBase {
    error?: Hlipc404ApplicationJsonErrorEnum;
    errorDescription?: Hlipc404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Hlipc500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Hlipc500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Hlipc500ApplicationJson extends SpeakeasyBase {
    error?: Hlipc500ApplicationJsonErrorEnum;
    errorDescription?: Hlipc500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Hlipc502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Hlipc502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Hlipc502ApplicationJson extends SpeakeasyBase {
    error?: Hlipc502ApplicationJsonErrorEnum;
    errorDescription?: Hlipc502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Hlipc503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Hlipc503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Hlipc503ApplicationJson extends SpeakeasyBase {
    error?: Hlipc503ApplicationJsonErrorEnum;
    errorDescription?: Hlipc503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Hlipc504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Hlipc504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Hlipc504ApplicationJson extends SpeakeasyBase {
    error?: Hlipc504ApplicationJsonErrorEnum;
    errorDescription?: Hlipc504ApplicationJsonErrorDescriptionEnum;
}
export declare class HlipcRequest extends SpeakeasyBase {
    request?: HlipcRequestBody;
    security: HlipcSecurity;
}
export declare class HlipcResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    hlipc400ApplicationJsonObject?: Hlipc400ApplicationJson;
    hlipc401ApplicationJsonObject?: Hlipc401ApplicationJson;
    hlipc404ApplicationJsonObject?: Hlipc404ApplicationJson;
    hlipc500ApplicationJsonObject?: Hlipc500ApplicationJson;
    hlipc502ApplicationJsonObject?: Hlipc502ApplicationJson;
    hlipc503ApplicationJsonObject?: Hlipc503ApplicationJson;
    hlipc504ApplicationJsonObject?: Hlipc504ApplicationJson;
}
