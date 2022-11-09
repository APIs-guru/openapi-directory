import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class RelcsRequestBodyCertificateParameters extends SpeakeasyBase {
    applicationNo: string;
    licenseNo: string;
}
export declare enum RelcsRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class RelcsRequestBody extends SpeakeasyBase {
    certificateParameters?: RelcsRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: RelcsRequestBodyFormatEnum;
    txnId: string;
}
export declare class RelcsSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class RelcsRequest extends SpeakeasyBase {
    request?: RelcsRequestBody;
    security: RelcsSecurity;
}
export declare enum Relcs400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Relcs400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Relcs400ApplicationJson extends SpeakeasyBase {
    error?: Relcs400ApplicationJsonErrorEnum;
    errorDescription?: Relcs400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Relcs401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Relcs401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Relcs401ApplicationJson extends SpeakeasyBase {
    error?: Relcs401ApplicationJsonErrorEnum;
    errorDescription?: Relcs401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Relcs404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Relcs404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Relcs404ApplicationJson extends SpeakeasyBase {
    error?: Relcs404ApplicationJsonErrorEnum;
    errorDescription?: Relcs404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Relcs500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Relcs500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Relcs500ApplicationJson extends SpeakeasyBase {
    error?: Relcs500ApplicationJsonErrorEnum;
    errorDescription?: Relcs500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Relcs502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Relcs502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Relcs502ApplicationJson extends SpeakeasyBase {
    error?: Relcs502ApplicationJsonErrorEnum;
    errorDescription?: Relcs502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Relcs503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Relcs503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Relcs503ApplicationJson extends SpeakeasyBase {
    error?: Relcs503ApplicationJsonErrorEnum;
    errorDescription?: Relcs503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Relcs504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Relcs504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Relcs504ApplicationJson extends SpeakeasyBase {
    error?: Relcs504ApplicationJsonErrorEnum;
    errorDescription?: Relcs504ApplicationJsonErrorDescriptionEnum;
}
export declare class RelcsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    relcs400ApplicationJsonObject?: Relcs400ApplicationJson;
    relcs401ApplicationJsonObject?: Relcs401ApplicationJson;
    relcs404ApplicationJsonObject?: Relcs404ApplicationJson;
    relcs500ApplicationJsonObject?: Relcs500ApplicationJson;
    relcs502ApplicationJsonObject?: Relcs502ApplicationJson;
    relcs503ApplicationJsonObject?: Relcs503ApplicationJson;
    relcs504ApplicationJsonObject?: Relcs504ApplicationJson;
}
