import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UgdcnRequestBodyCertificateParameters extends SpeakeasyBase {
    documentNumber: string;
}
export declare enum UgdcnRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class UgdcnRequestBody extends SpeakeasyBase {
    certificateParameters?: UgdcnRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: UgdcnRequestBodyFormatEnum;
    txnId: string;
}
export declare class UgdcnSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Ugdcn400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Ugdcn400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Ugdcn400ApplicationJson extends SpeakeasyBase {
    error?: Ugdcn400ApplicationJsonErrorEnum;
    errorDescription?: Ugdcn400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ugdcn401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Ugdcn401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Ugdcn401ApplicationJson extends SpeakeasyBase {
    error?: Ugdcn401ApplicationJsonErrorEnum;
    errorDescription?: Ugdcn401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ugdcn404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Ugdcn404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Ugdcn404ApplicationJson extends SpeakeasyBase {
    error?: Ugdcn404ApplicationJsonErrorEnum;
    errorDescription?: Ugdcn404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ugdcn500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Ugdcn500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Ugdcn500ApplicationJson extends SpeakeasyBase {
    error?: Ugdcn500ApplicationJsonErrorEnum;
    errorDescription?: Ugdcn500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ugdcn502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Ugdcn502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Ugdcn502ApplicationJson extends SpeakeasyBase {
    error?: Ugdcn502ApplicationJsonErrorEnum;
    errorDescription?: Ugdcn502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ugdcn503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Ugdcn503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Ugdcn503ApplicationJson extends SpeakeasyBase {
    error?: Ugdcn503ApplicationJsonErrorEnum;
    errorDescription?: Ugdcn503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ugdcn504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Ugdcn504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Ugdcn504ApplicationJson extends SpeakeasyBase {
    error?: Ugdcn504ApplicationJsonErrorEnum;
    errorDescription?: Ugdcn504ApplicationJsonErrorDescriptionEnum;
}
export declare class UgdcnRequest extends SpeakeasyBase {
    request?: UgdcnRequestBody;
    security: UgdcnSecurity;
}
export declare class UgdcnResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ugdcn400ApplicationJsonObject?: Ugdcn400ApplicationJson;
    ugdcn401ApplicationJsonObject?: Ugdcn401ApplicationJson;
    ugdcn404ApplicationJsonObject?: Ugdcn404ApplicationJson;
    ugdcn500ApplicationJsonObject?: Ugdcn500ApplicationJson;
    ugdcn502ApplicationJsonObject?: Ugdcn502ApplicationJson;
    ugdcn503ApplicationJsonObject?: Ugdcn503ApplicationJson;
    ugdcn504ApplicationJsonObject?: Ugdcn504ApplicationJson;
}
