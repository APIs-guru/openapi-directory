import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PripcRequestBodyCertificateParameters extends SpeakeasyBase {
    customerId: string;
    policyNumber: string;
    policyStartDate: string;
}
export declare enum PripcRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class PripcRequestBody extends SpeakeasyBase {
    certificateParameters?: PripcRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: PripcRequestBodyFormatEnum;
    txnId: string;
}
export declare class PripcSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class PripcRequest extends SpeakeasyBase {
    request?: PripcRequestBody;
    security: PripcSecurity;
}
export declare enum Pripc400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Pripc400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Pripc400ApplicationJson extends SpeakeasyBase {
    error?: Pripc400ApplicationJsonErrorEnum;
    errorDescription?: Pripc400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Pripc401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Pripc401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Pripc401ApplicationJson extends SpeakeasyBase {
    error?: Pripc401ApplicationJsonErrorEnum;
    errorDescription?: Pripc401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Pripc404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Pripc404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Pripc404ApplicationJson extends SpeakeasyBase {
    error?: Pripc404ApplicationJsonErrorEnum;
    errorDescription?: Pripc404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Pripc500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Pripc500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Pripc500ApplicationJson extends SpeakeasyBase {
    error?: Pripc500ApplicationJsonErrorEnum;
    errorDescription?: Pripc500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Pripc502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Pripc502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Pripc502ApplicationJson extends SpeakeasyBase {
    error?: Pripc502ApplicationJsonErrorEnum;
    errorDescription?: Pripc502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Pripc503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Pripc503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Pripc503ApplicationJson extends SpeakeasyBase {
    error?: Pripc503ApplicationJsonErrorEnum;
    errorDescription?: Pripc503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Pripc504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Pripc504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Pripc504ApplicationJson extends SpeakeasyBase {
    error?: Pripc504ApplicationJsonErrorEnum;
    errorDescription?: Pripc504ApplicationJsonErrorDescriptionEnum;
}
export declare class PripcResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    pripc400ApplicationJsonObject?: Pripc400ApplicationJson;
    pripc401ApplicationJsonObject?: Pripc401ApplicationJson;
    pripc404ApplicationJsonObject?: Pripc404ApplicationJson;
    pripc500ApplicationJsonObject?: Pripc500ApplicationJson;
    pripc502ApplicationJsonObject?: Pripc502ApplicationJson;
    pripc503ApplicationJsonObject?: Pripc503ApplicationJson;
    pripc504ApplicationJsonObject?: Pripc504ApplicationJson;
}
