import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TapcnRequestBodyCertificateParameters extends SpeakeasyBase {
    documentNumber: string;
}
export declare enum TapcnRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class TapcnRequestBody extends SpeakeasyBase {
    certificateParameters?: TapcnRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: TapcnRequestBodyFormatEnum;
    txnId: string;
}
export declare class TapcnSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Tapcn400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Tapcn400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Tapcn400ApplicationJson extends SpeakeasyBase {
    error?: Tapcn400ApplicationJsonErrorEnum;
    errorDescription?: Tapcn400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Tapcn401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Tapcn401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Tapcn401ApplicationJson extends SpeakeasyBase {
    error?: Tapcn401ApplicationJsonErrorEnum;
    errorDescription?: Tapcn401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Tapcn404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Tapcn404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Tapcn404ApplicationJson extends SpeakeasyBase {
    error?: Tapcn404ApplicationJsonErrorEnum;
    errorDescription?: Tapcn404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Tapcn500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Tapcn500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Tapcn500ApplicationJson extends SpeakeasyBase {
    error?: Tapcn500ApplicationJsonErrorEnum;
    errorDescription?: Tapcn500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Tapcn502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Tapcn502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Tapcn502ApplicationJson extends SpeakeasyBase {
    error?: Tapcn502ApplicationJsonErrorEnum;
    errorDescription?: Tapcn502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Tapcn503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Tapcn503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Tapcn503ApplicationJson extends SpeakeasyBase {
    error?: Tapcn503ApplicationJsonErrorEnum;
    errorDescription?: Tapcn503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Tapcn504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Tapcn504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Tapcn504ApplicationJson extends SpeakeasyBase {
    error?: Tapcn504ApplicationJsonErrorEnum;
    errorDescription?: Tapcn504ApplicationJsonErrorDescriptionEnum;
}
export declare class TapcnRequest extends SpeakeasyBase {
    request?: TapcnRequestBody;
    security: TapcnSecurity;
}
export declare class TapcnResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tapcn400ApplicationJsonObject?: Tapcn400ApplicationJson;
    tapcn401ApplicationJsonObject?: Tapcn401ApplicationJson;
    tapcn404ApplicationJsonObject?: Tapcn404ApplicationJson;
    tapcn500ApplicationJsonObject?: Tapcn500ApplicationJson;
    tapcn502ApplicationJsonObject?: Tapcn502ApplicationJson;
    tapcn503ApplicationJsonObject?: Tapcn503ApplicationJson;
    tapcn504ApplicationJsonObject?: Tapcn504ApplicationJson;
}
