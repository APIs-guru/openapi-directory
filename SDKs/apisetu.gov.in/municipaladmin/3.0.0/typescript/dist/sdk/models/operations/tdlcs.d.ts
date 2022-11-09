import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class TdlcsRequestBodyCertificateParameters extends SpeakeasyBase {
    documentNumber: string;
}
export declare enum TdlcsRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class TdlcsRequestBody extends SpeakeasyBase {
    certificateParameters?: TdlcsRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: TdlcsRequestBodyFormatEnum;
    txnId: string;
}
export declare class TdlcsSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class TdlcsRequest extends SpeakeasyBase {
    request?: TdlcsRequestBody;
    security: TdlcsSecurity;
}
export declare enum Tdlcs400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Tdlcs400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Tdlcs400ApplicationJson extends SpeakeasyBase {
    error?: Tdlcs400ApplicationJsonErrorEnum;
    errorDescription?: Tdlcs400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Tdlcs401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Tdlcs401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Tdlcs401ApplicationJson extends SpeakeasyBase {
    error?: Tdlcs401ApplicationJsonErrorEnum;
    errorDescription?: Tdlcs401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Tdlcs404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Tdlcs404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Tdlcs404ApplicationJson extends SpeakeasyBase {
    error?: Tdlcs404ApplicationJsonErrorEnum;
    errorDescription?: Tdlcs404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Tdlcs500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Tdlcs500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Tdlcs500ApplicationJson extends SpeakeasyBase {
    error?: Tdlcs500ApplicationJsonErrorEnum;
    errorDescription?: Tdlcs500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Tdlcs502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Tdlcs502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Tdlcs502ApplicationJson extends SpeakeasyBase {
    error?: Tdlcs502ApplicationJsonErrorEnum;
    errorDescription?: Tdlcs502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Tdlcs503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Tdlcs503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Tdlcs503ApplicationJson extends SpeakeasyBase {
    error?: Tdlcs503ApplicationJsonErrorEnum;
    errorDescription?: Tdlcs503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Tdlcs504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Tdlcs504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Tdlcs504ApplicationJson extends SpeakeasyBase {
    error?: Tdlcs504ApplicationJsonErrorEnum;
    errorDescription?: Tdlcs504ApplicationJsonErrorDescriptionEnum;
}
export declare class TdlcsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tdlcs400ApplicationJsonObject?: Tdlcs400ApplicationJson;
    tdlcs401ApplicationJsonObject?: Tdlcs401ApplicationJson;
    tdlcs404ApplicationJsonObject?: Tdlcs404ApplicationJson;
    tdlcs500ApplicationJsonObject?: Tdlcs500ApplicationJson;
    tdlcs502ApplicationJsonObject?: Tdlcs502ApplicationJson;
    tdlcs503ApplicationJsonObject?: Tdlcs503ApplicationJson;
    tdlcs504ApplicationJsonObject?: Tdlcs504ApplicationJson;
}
