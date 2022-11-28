import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DelcsRequestBodyCertificateParameters extends SpeakeasyBase {
    applicationNo: string;
    licenseNo: string;
}
export declare enum DelcsRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class DelcsRequestBody extends SpeakeasyBase {
    certificateParameters?: DelcsRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: DelcsRequestBodyFormatEnum;
    txnId: string;
}
export declare class DelcsSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Delcs400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Delcs400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Delcs400ApplicationJson extends SpeakeasyBase {
    error?: Delcs400ApplicationJsonErrorEnum;
    errorDescription?: Delcs400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Delcs401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Delcs401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Delcs401ApplicationJson extends SpeakeasyBase {
    error?: Delcs401ApplicationJsonErrorEnum;
    errorDescription?: Delcs401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Delcs404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Delcs404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Delcs404ApplicationJson extends SpeakeasyBase {
    error?: Delcs404ApplicationJsonErrorEnum;
    errorDescription?: Delcs404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Delcs500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Delcs500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Delcs500ApplicationJson extends SpeakeasyBase {
    error?: Delcs500ApplicationJsonErrorEnum;
    errorDescription?: Delcs500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Delcs502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Delcs502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Delcs502ApplicationJson extends SpeakeasyBase {
    error?: Delcs502ApplicationJsonErrorEnum;
    errorDescription?: Delcs502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Delcs503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Delcs503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Delcs503ApplicationJson extends SpeakeasyBase {
    error?: Delcs503ApplicationJsonErrorEnum;
    errorDescription?: Delcs503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Delcs504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Delcs504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Delcs504ApplicationJson extends SpeakeasyBase {
    error?: Delcs504ApplicationJsonErrorEnum;
    errorDescription?: Delcs504ApplicationJsonErrorDescriptionEnum;
}
export declare class DelcsRequest extends SpeakeasyBase {
    request?: DelcsRequestBody;
    security: DelcsSecurity;
}
export declare class DelcsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    delcs400ApplicationJsonObject?: Delcs400ApplicationJson;
    delcs401ApplicationJsonObject?: Delcs401ApplicationJson;
    delcs404ApplicationJsonObject?: Delcs404ApplicationJson;
    delcs500ApplicationJsonObject?: Delcs500ApplicationJson;
    delcs502ApplicationJsonObject?: Delcs502ApplicationJson;
    delcs503ApplicationJsonObject?: Delcs503ApplicationJson;
    delcs504ApplicationJsonObject?: Delcs504ApplicationJson;
}
