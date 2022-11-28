import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IticrRequestBodyCertificateParameters extends SpeakeasyBase {
    fullName: string;
    certno: string;
}
export declare enum IticrRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class IticrRequestBody extends SpeakeasyBase {
    certificateParameters?: IticrRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: IticrRequestBodyFormatEnum;
    txnId: string;
}
export declare class IticrSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Iticr400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Iticr400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Iticr400ApplicationJson extends SpeakeasyBase {
    error?: Iticr400ApplicationJsonErrorEnum;
    errorDescription?: Iticr400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Iticr401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Iticr401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Iticr401ApplicationJson extends SpeakeasyBase {
    error?: Iticr401ApplicationJsonErrorEnum;
    errorDescription?: Iticr401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Iticr404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Iticr404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Iticr404ApplicationJson extends SpeakeasyBase {
    error?: Iticr404ApplicationJsonErrorEnum;
    errorDescription?: Iticr404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Iticr500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Iticr500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Iticr500ApplicationJson extends SpeakeasyBase {
    error?: Iticr500ApplicationJsonErrorEnum;
    errorDescription?: Iticr500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Iticr502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Iticr502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Iticr502ApplicationJson extends SpeakeasyBase {
    error?: Iticr502ApplicationJsonErrorEnum;
    errorDescription?: Iticr502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Iticr503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Iticr503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Iticr503ApplicationJson extends SpeakeasyBase {
    error?: Iticr503ApplicationJsonErrorEnum;
    errorDescription?: Iticr503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Iticr504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Iticr504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Iticr504ApplicationJson extends SpeakeasyBase {
    error?: Iticr504ApplicationJsonErrorEnum;
    errorDescription?: Iticr504ApplicationJsonErrorDescriptionEnum;
}
export declare class IticrRequest extends SpeakeasyBase {
    request?: IticrRequestBody;
    security: IticrSecurity;
}
export declare class IticrResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    iticr400ApplicationJsonObject?: Iticr400ApplicationJson;
    iticr401ApplicationJsonObject?: Iticr401ApplicationJson;
    iticr404ApplicationJsonObject?: Iticr404ApplicationJson;
    iticr500ApplicationJsonObject?: Iticr500ApplicationJson;
    iticr502ApplicationJsonObject?: Iticr502ApplicationJson;
    iticr503ApplicationJsonObject?: Iticr503ApplicationJson;
    iticr504ApplicationJsonObject?: Iticr504ApplicationJson;
}
