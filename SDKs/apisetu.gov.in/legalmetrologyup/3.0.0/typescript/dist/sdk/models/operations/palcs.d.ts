import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PalcsRequestBodyCertificateParameters extends SpeakeasyBase {
    applicationNo: string;
    licenseNo: string;
}
export declare enum PalcsRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class PalcsRequestBody extends SpeakeasyBase {
    certificateParameters?: PalcsRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: PalcsRequestBodyFormatEnum;
    txnId: string;
}
export declare class PalcsSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Palcs400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Palcs400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Palcs400ApplicationJson extends SpeakeasyBase {
    error?: Palcs400ApplicationJsonErrorEnum;
    errorDescription?: Palcs400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Palcs401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Palcs401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Palcs401ApplicationJson extends SpeakeasyBase {
    error?: Palcs401ApplicationJsonErrorEnum;
    errorDescription?: Palcs401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Palcs404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Palcs404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Palcs404ApplicationJson extends SpeakeasyBase {
    error?: Palcs404ApplicationJsonErrorEnum;
    errorDescription?: Palcs404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Palcs500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Palcs500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Palcs500ApplicationJson extends SpeakeasyBase {
    error?: Palcs500ApplicationJsonErrorEnum;
    errorDescription?: Palcs500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Palcs502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Palcs502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Palcs502ApplicationJson extends SpeakeasyBase {
    error?: Palcs502ApplicationJsonErrorEnum;
    errorDescription?: Palcs502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Palcs503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Palcs503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Palcs503ApplicationJson extends SpeakeasyBase {
    error?: Palcs503ApplicationJsonErrorEnum;
    errorDescription?: Palcs503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Palcs504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Palcs504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Palcs504ApplicationJson extends SpeakeasyBase {
    error?: Palcs504ApplicationJsonErrorEnum;
    errorDescription?: Palcs504ApplicationJsonErrorDescriptionEnum;
}
export declare class PalcsRequest extends SpeakeasyBase {
    request?: PalcsRequestBody;
    security: PalcsSecurity;
}
export declare class PalcsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    palcs400ApplicationJsonObject?: Palcs400ApplicationJson;
    palcs401ApplicationJsonObject?: Palcs401ApplicationJson;
    palcs404ApplicationJsonObject?: Palcs404ApplicationJson;
    palcs500ApplicationJsonObject?: Palcs500ApplicationJson;
    palcs502ApplicationJsonObject?: Palcs502ApplicationJson;
    palcs503ApplicationJsonObject?: Palcs503ApplicationJson;
    palcs504ApplicationJsonObject?: Palcs504ApplicationJson;
}
