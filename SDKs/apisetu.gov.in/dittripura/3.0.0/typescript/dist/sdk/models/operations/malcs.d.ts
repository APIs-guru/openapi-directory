import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class MalcsRequestBodyCertificateParameters extends SpeakeasyBase {
    refNo: string;
    tokenNo: string;
}
export declare enum MalcsRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class MalcsRequestBody extends SpeakeasyBase {
    certificateParameters?: MalcsRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: MalcsRequestBodyFormatEnum;
    txnId: string;
}
export declare class MalcsSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class MalcsRequest extends SpeakeasyBase {
    request?: MalcsRequestBody;
    security: MalcsSecurity;
}
export declare enum Malcs400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Malcs400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Malcs400ApplicationJson extends SpeakeasyBase {
    error?: Malcs400ApplicationJsonErrorEnum;
    errorDescription?: Malcs400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Malcs401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Malcs401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Malcs401ApplicationJson extends SpeakeasyBase {
    error?: Malcs401ApplicationJsonErrorEnum;
    errorDescription?: Malcs401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Malcs404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Malcs404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Malcs404ApplicationJson extends SpeakeasyBase {
    error?: Malcs404ApplicationJsonErrorEnum;
    errorDescription?: Malcs404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Malcs500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Malcs500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Malcs500ApplicationJson extends SpeakeasyBase {
    error?: Malcs500ApplicationJsonErrorEnum;
    errorDescription?: Malcs500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Malcs502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Malcs502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Malcs502ApplicationJson extends SpeakeasyBase {
    error?: Malcs502ApplicationJsonErrorEnum;
    errorDescription?: Malcs502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Malcs503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Malcs503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Malcs503ApplicationJson extends SpeakeasyBase {
    error?: Malcs503ApplicationJsonErrorEnum;
    errorDescription?: Malcs503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Malcs504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Malcs504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Malcs504ApplicationJson extends SpeakeasyBase {
    error?: Malcs504ApplicationJsonErrorEnum;
    errorDescription?: Malcs504ApplicationJsonErrorDescriptionEnum;
}
export declare class MalcsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    malcs400ApplicationJsonObject?: Malcs400ApplicationJson;
    malcs401ApplicationJsonObject?: Malcs401ApplicationJson;
    malcs404ApplicationJsonObject?: Malcs404ApplicationJson;
    malcs500ApplicationJsonObject?: Malcs500ApplicationJson;
    malcs502ApplicationJsonObject?: Malcs502ApplicationJson;
    malcs503ApplicationJsonObject?: Malcs503ApplicationJson;
    malcs504ApplicationJsonObject?: Malcs504ApplicationJson;
}
