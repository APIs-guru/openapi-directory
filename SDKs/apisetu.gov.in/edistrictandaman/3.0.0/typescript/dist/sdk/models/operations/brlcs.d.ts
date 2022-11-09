import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class BrlcsRequestBodyCertificateParameters extends SpeakeasyBase {
    certificateNumber: string;
}
export declare enum BrlcsRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class BrlcsRequestBody extends SpeakeasyBase {
    certificateParameters?: BrlcsRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: BrlcsRequestBodyFormatEnum;
    txnId: string;
}
export declare class BrlcsSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class BrlcsRequest extends SpeakeasyBase {
    request?: BrlcsRequestBody;
    security: BrlcsSecurity;
}
export declare enum Brlcs400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Brlcs400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Brlcs400ApplicationJson extends SpeakeasyBase {
    error?: Brlcs400ApplicationJsonErrorEnum;
    errorDescription?: Brlcs400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Brlcs401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Brlcs401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Brlcs401ApplicationJson extends SpeakeasyBase {
    error?: Brlcs401ApplicationJsonErrorEnum;
    errorDescription?: Brlcs401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Brlcs404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Brlcs404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Brlcs404ApplicationJson extends SpeakeasyBase {
    error?: Brlcs404ApplicationJsonErrorEnum;
    errorDescription?: Brlcs404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Brlcs500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Brlcs500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Brlcs500ApplicationJson extends SpeakeasyBase {
    error?: Brlcs500ApplicationJsonErrorEnum;
    errorDescription?: Brlcs500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Brlcs502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Brlcs502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Brlcs502ApplicationJson extends SpeakeasyBase {
    error?: Brlcs502ApplicationJsonErrorEnum;
    errorDescription?: Brlcs502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Brlcs503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Brlcs503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Brlcs503ApplicationJson extends SpeakeasyBase {
    error?: Brlcs503ApplicationJsonErrorEnum;
    errorDescription?: Brlcs503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Brlcs504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Brlcs504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Brlcs504ApplicationJson extends SpeakeasyBase {
    error?: Brlcs504ApplicationJsonErrorEnum;
    errorDescription?: Brlcs504ApplicationJsonErrorDescriptionEnum;
}
export declare class BrlcsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    brlcs400ApplicationJsonObject?: Brlcs400ApplicationJson;
    brlcs401ApplicationJsonObject?: Brlcs401ApplicationJson;
    brlcs404ApplicationJsonObject?: Brlcs404ApplicationJson;
    brlcs500ApplicationJsonObject?: Brlcs500ApplicationJson;
    brlcs502ApplicationJsonObject?: Brlcs502ApplicationJson;
    brlcs503ApplicationJsonObject?: Brlcs503ApplicationJson;
    brlcs504ApplicationJsonObject?: Brlcs504ApplicationJson;
}
