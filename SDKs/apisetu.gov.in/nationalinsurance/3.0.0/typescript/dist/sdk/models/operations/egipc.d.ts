import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EgipcRequestBodyCertificateParameters extends SpeakeasyBase {
    customerId: string;
    policyNumber: string;
    policyStartDate: string;
}
export declare enum EgipcRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class EgipcRequestBody extends SpeakeasyBase {
    certificateParameters?: EgipcRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: EgipcRequestBodyFormatEnum;
    txnId: string;
}
export declare class EgipcSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Egipc400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Egipc400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Egipc400ApplicationJson extends SpeakeasyBase {
    error?: Egipc400ApplicationJsonErrorEnum;
    errorDescription?: Egipc400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Egipc401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Egipc401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Egipc401ApplicationJson extends SpeakeasyBase {
    error?: Egipc401ApplicationJsonErrorEnum;
    errorDescription?: Egipc401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Egipc404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Egipc404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Egipc404ApplicationJson extends SpeakeasyBase {
    error?: Egipc404ApplicationJsonErrorEnum;
    errorDescription?: Egipc404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Egipc500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Egipc500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Egipc500ApplicationJson extends SpeakeasyBase {
    error?: Egipc500ApplicationJsonErrorEnum;
    errorDescription?: Egipc500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Egipc502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Egipc502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Egipc502ApplicationJson extends SpeakeasyBase {
    error?: Egipc502ApplicationJsonErrorEnum;
    errorDescription?: Egipc502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Egipc503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Egipc503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Egipc503ApplicationJson extends SpeakeasyBase {
    error?: Egipc503ApplicationJsonErrorEnum;
    errorDescription?: Egipc503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Egipc504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Egipc504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Egipc504ApplicationJson extends SpeakeasyBase {
    error?: Egipc504ApplicationJsonErrorEnum;
    errorDescription?: Egipc504ApplicationJsonErrorDescriptionEnum;
}
export declare class EgipcRequest extends SpeakeasyBase {
    request?: EgipcRequestBody;
    security: EgipcSecurity;
}
export declare class EgipcResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    egipc400ApplicationJsonObject?: Egipc400ApplicationJson;
    egipc401ApplicationJsonObject?: Egipc401ApplicationJson;
    egipc404ApplicationJsonObject?: Egipc404ApplicationJson;
    egipc500ApplicationJsonObject?: Egipc500ApplicationJson;
    egipc502ApplicationJsonObject?: Egipc502ApplicationJson;
    egipc503ApplicationJsonObject?: Egipc503ApplicationJson;
    egipc504ApplicationJsonObject?: Egipc504ApplicationJson;
}
