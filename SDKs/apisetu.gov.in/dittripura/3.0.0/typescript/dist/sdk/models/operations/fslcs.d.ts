import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FslcsRequestBodyCertificateParameters extends SpeakeasyBase {
    refNo: string;
    tokenNo: string;
}
export declare enum FslcsRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class FslcsRequestBody extends SpeakeasyBase {
    certificateParameters?: FslcsRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: FslcsRequestBodyFormatEnum;
    txnId: string;
}
export declare class FslcsSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class FslcsRequest extends SpeakeasyBase {
    request?: FslcsRequestBody;
    security: FslcsSecurity;
}
export declare enum Fslcs400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Fslcs400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Fslcs400ApplicationJson extends SpeakeasyBase {
    error?: Fslcs400ApplicationJsonErrorEnum;
    errorDescription?: Fslcs400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Fslcs401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Fslcs401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Fslcs401ApplicationJson extends SpeakeasyBase {
    error?: Fslcs401ApplicationJsonErrorEnum;
    errorDescription?: Fslcs401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Fslcs404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Fslcs404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Fslcs404ApplicationJson extends SpeakeasyBase {
    error?: Fslcs404ApplicationJsonErrorEnum;
    errorDescription?: Fslcs404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Fslcs500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Fslcs500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Fslcs500ApplicationJson extends SpeakeasyBase {
    error?: Fslcs500ApplicationJsonErrorEnum;
    errorDescription?: Fslcs500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Fslcs502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Fslcs502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Fslcs502ApplicationJson extends SpeakeasyBase {
    error?: Fslcs502ApplicationJsonErrorEnum;
    errorDescription?: Fslcs502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Fslcs503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Fslcs503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Fslcs503ApplicationJson extends SpeakeasyBase {
    error?: Fslcs503ApplicationJsonErrorEnum;
    errorDescription?: Fslcs503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Fslcs504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Fslcs504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Fslcs504ApplicationJson extends SpeakeasyBase {
    error?: Fslcs504ApplicationJsonErrorEnum;
    errorDescription?: Fslcs504ApplicationJsonErrorDescriptionEnum;
}
export declare class FslcsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    fslcs400ApplicationJsonObject?: Fslcs400ApplicationJson;
    fslcs401ApplicationJsonObject?: Fslcs401ApplicationJson;
    fslcs404ApplicationJsonObject?: Fslcs404ApplicationJson;
    fslcs500ApplicationJsonObject?: Fslcs500ApplicationJson;
    fslcs502ApplicationJsonObject?: Fslcs502ApplicationJson;
    fslcs503ApplicationJsonObject?: Fslcs503ApplicationJson;
    fslcs504ApplicationJsonObject?: Fslcs504ApplicationJson;
}
