import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CripcRequestBodyCertificateParameters extends SpeakeasyBase {
    customerId: string;
    policyNumber: string;
    policyStartDate: string;
}
export declare enum CripcRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class CripcRequestBody extends SpeakeasyBase {
    certificateParameters?: CripcRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: CripcRequestBodyFormatEnum;
    txnId: string;
}
export declare class CripcSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Cripc400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Cripc400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Cripc400ApplicationJson extends SpeakeasyBase {
    error?: Cripc400ApplicationJsonErrorEnum;
    errorDescription?: Cripc400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Cripc401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Cripc401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Cripc401ApplicationJson extends SpeakeasyBase {
    error?: Cripc401ApplicationJsonErrorEnum;
    errorDescription?: Cripc401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Cripc404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Cripc404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Cripc404ApplicationJson extends SpeakeasyBase {
    error?: Cripc404ApplicationJsonErrorEnum;
    errorDescription?: Cripc404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Cripc500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Cripc500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Cripc500ApplicationJson extends SpeakeasyBase {
    error?: Cripc500ApplicationJsonErrorEnum;
    errorDescription?: Cripc500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Cripc502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Cripc502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Cripc502ApplicationJson extends SpeakeasyBase {
    error?: Cripc502ApplicationJsonErrorEnum;
    errorDescription?: Cripc502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Cripc503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Cripc503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Cripc503ApplicationJson extends SpeakeasyBase {
    error?: Cripc503ApplicationJsonErrorEnum;
    errorDescription?: Cripc503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Cripc504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Cripc504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Cripc504ApplicationJson extends SpeakeasyBase {
    error?: Cripc504ApplicationJsonErrorEnum;
    errorDescription?: Cripc504ApplicationJsonErrorDescriptionEnum;
}
export declare class CripcRequest extends SpeakeasyBase {
    request?: CripcRequestBody;
    security: CripcSecurity;
}
export declare class CripcResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    cripc400ApplicationJsonObject?: Cripc400ApplicationJson;
    cripc401ApplicationJsonObject?: Cripc401ApplicationJson;
    cripc404ApplicationJsonObject?: Cripc404ApplicationJson;
    cripc500ApplicationJsonObject?: Cripc500ApplicationJson;
    cripc502ApplicationJsonObject?: Cripc502ApplicationJson;
    cripc503ApplicationJsonObject?: Cripc503ApplicationJson;
    cripc504ApplicationJsonObject?: Cripc504ApplicationJson;
}
