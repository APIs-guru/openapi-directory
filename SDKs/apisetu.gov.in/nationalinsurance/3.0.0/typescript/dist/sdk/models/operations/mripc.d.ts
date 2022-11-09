import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class MripcRequestBodyCertificateParameters extends SpeakeasyBase {
    customerId: string;
    policyNumber: string;
    policyStartDate: string;
}
export declare enum MripcRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class MripcRequestBody extends SpeakeasyBase {
    certificateParameters?: MripcRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: MripcRequestBodyFormatEnum;
    txnId: string;
}
export declare class MripcSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class MripcRequest extends SpeakeasyBase {
    request?: MripcRequestBody;
    security: MripcSecurity;
}
export declare enum Mripc400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Mripc400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Mripc400ApplicationJson extends SpeakeasyBase {
    error?: Mripc400ApplicationJsonErrorEnum;
    errorDescription?: Mripc400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Mripc401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Mripc401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Mripc401ApplicationJson extends SpeakeasyBase {
    error?: Mripc401ApplicationJsonErrorEnum;
    errorDescription?: Mripc401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Mripc404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Mripc404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Mripc404ApplicationJson extends SpeakeasyBase {
    error?: Mripc404ApplicationJsonErrorEnum;
    errorDescription?: Mripc404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Mripc500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Mripc500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Mripc500ApplicationJson extends SpeakeasyBase {
    error?: Mripc500ApplicationJsonErrorEnum;
    errorDescription?: Mripc500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Mripc502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Mripc502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Mripc502ApplicationJson extends SpeakeasyBase {
    error?: Mripc502ApplicationJsonErrorEnum;
    errorDescription?: Mripc502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Mripc503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Mripc503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Mripc503ApplicationJson extends SpeakeasyBase {
    error?: Mripc503ApplicationJsonErrorEnum;
    errorDescription?: Mripc503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Mripc504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Mripc504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Mripc504ApplicationJson extends SpeakeasyBase {
    error?: Mripc504ApplicationJsonErrorEnum;
    errorDescription?: Mripc504ApplicationJsonErrorDescriptionEnum;
}
export declare class MripcResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    mripc400ApplicationJsonObject?: Mripc400ApplicationJson;
    mripc401ApplicationJsonObject?: Mripc401ApplicationJson;
    mripc404ApplicationJsonObject?: Mripc404ApplicationJson;
    mripc500ApplicationJsonObject?: Mripc500ApplicationJson;
    mripc502ApplicationJsonObject?: Mripc502ApplicationJson;
    mripc503ApplicationJsonObject?: Mripc503ApplicationJson;
    mripc504ApplicationJsonObject?: Mripc504ApplicationJson;
}
