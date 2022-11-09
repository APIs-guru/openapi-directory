import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class RatcrRequestBodyCertificateParameters extends SpeakeasyBase {
    fullName: string;
    uid: string;
}
export declare enum RatcrRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class RatcrRequestBody extends SpeakeasyBase {
    certificateParameters?: RatcrRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: RatcrRequestBodyFormatEnum;
    txnId: string;
}
export declare class RatcrSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class RatcrRequest extends SpeakeasyBase {
    request?: RatcrRequestBody;
    security: RatcrSecurity;
}
export declare enum Ratcr400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Ratcr400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Ratcr400ApplicationJson extends SpeakeasyBase {
    error?: Ratcr400ApplicationJsonErrorEnum;
    errorDescription?: Ratcr400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ratcr401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Ratcr401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Ratcr401ApplicationJson extends SpeakeasyBase {
    error?: Ratcr401ApplicationJsonErrorEnum;
    errorDescription?: Ratcr401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ratcr404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Ratcr404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Ratcr404ApplicationJson extends SpeakeasyBase {
    error?: Ratcr404ApplicationJsonErrorEnum;
    errorDescription?: Ratcr404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ratcr500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Ratcr500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Ratcr500ApplicationJson extends SpeakeasyBase {
    error?: Ratcr500ApplicationJsonErrorEnum;
    errorDescription?: Ratcr500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ratcr502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Ratcr502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Ratcr502ApplicationJson extends SpeakeasyBase {
    error?: Ratcr502ApplicationJsonErrorEnum;
    errorDescription?: Ratcr502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ratcr503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Ratcr503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Ratcr503ApplicationJson extends SpeakeasyBase {
    error?: Ratcr503ApplicationJsonErrorEnum;
    errorDescription?: Ratcr503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ratcr504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Ratcr504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Ratcr504ApplicationJson extends SpeakeasyBase {
    error?: Ratcr504ApplicationJsonErrorEnum;
    errorDescription?: Ratcr504ApplicationJsonErrorDescriptionEnum;
}
export declare class RatcrResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ratcr400ApplicationJsonObject?: Ratcr400ApplicationJson;
    ratcr401ApplicationJsonObject?: Ratcr401ApplicationJson;
    ratcr404ApplicationJsonObject?: Ratcr404ApplicationJson;
    ratcr500ApplicationJsonObject?: Ratcr500ApplicationJson;
    ratcr502ApplicationJsonObject?: Ratcr502ApplicationJson;
    ratcr503ApplicationJsonObject?: Ratcr503ApplicationJson;
    ratcr504ApplicationJsonObject?: Ratcr504ApplicationJson;
}
