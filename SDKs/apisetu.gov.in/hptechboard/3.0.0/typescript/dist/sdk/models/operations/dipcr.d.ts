import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DipcrRequestBodyCertificateParameters extends SpeakeasyBase {
    fullName: string;
    rollNo: string;
}
export declare enum DipcrRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class DipcrRequestBody extends SpeakeasyBase {
    certificateParameters?: DipcrRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: DipcrRequestBodyFormatEnum;
    txnId: string;
}
export declare class DipcrSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class DipcrRequest extends SpeakeasyBase {
    request?: DipcrRequestBody;
    security: DipcrSecurity;
}
export declare enum Dipcr400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Dipcr400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Dipcr400ApplicationJson extends SpeakeasyBase {
    error?: Dipcr400ApplicationJsonErrorEnum;
    errorDescription?: Dipcr400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Dipcr401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Dipcr401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Dipcr401ApplicationJson extends SpeakeasyBase {
    error?: Dipcr401ApplicationJsonErrorEnum;
    errorDescription?: Dipcr401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Dipcr404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Dipcr404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Dipcr404ApplicationJson extends SpeakeasyBase {
    error?: Dipcr404ApplicationJsonErrorEnum;
    errorDescription?: Dipcr404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Dipcr500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Dipcr500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Dipcr500ApplicationJson extends SpeakeasyBase {
    error?: Dipcr500ApplicationJsonErrorEnum;
    errorDescription?: Dipcr500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Dipcr502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Dipcr502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Dipcr502ApplicationJson extends SpeakeasyBase {
    error?: Dipcr502ApplicationJsonErrorEnum;
    errorDescription?: Dipcr502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Dipcr503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Dipcr503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Dipcr503ApplicationJson extends SpeakeasyBase {
    error?: Dipcr503ApplicationJsonErrorEnum;
    errorDescription?: Dipcr503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Dipcr504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Dipcr504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Dipcr504ApplicationJson extends SpeakeasyBase {
    error?: Dipcr504ApplicationJsonErrorEnum;
    errorDescription?: Dipcr504ApplicationJsonErrorDescriptionEnum;
}
export declare class DipcrResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    dipcr400ApplicationJsonObject?: Dipcr400ApplicationJson;
    dipcr401ApplicationJsonObject?: Dipcr401ApplicationJson;
    dipcr404ApplicationJsonObject?: Dipcr404ApplicationJson;
    dipcr500ApplicationJsonObject?: Dipcr500ApplicationJson;
    dipcr502ApplicationJsonObject?: Dipcr502ApplicationJson;
    dipcr503ApplicationJsonObject?: Dipcr503ApplicationJson;
    dipcr504ApplicationJsonObject?: Dipcr504ApplicationJson;
}
