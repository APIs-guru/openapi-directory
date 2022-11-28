import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DgcerRequestBodyCertificateParameters extends SpeakeasyBase {
    degree: string;
    fullName: string;
    rroll: string;
}
export declare enum DgcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class DgcerRequestBody extends SpeakeasyBase {
    certificateParameters?: DgcerRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: DgcerRequestBodyFormatEnum;
    txnId: string;
}
export declare class DgcerSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Dgcer400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Dgcer400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Dgcer400ApplicationJson extends SpeakeasyBase {
    error?: Dgcer400ApplicationJsonErrorEnum;
    errorDescription?: Dgcer400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Dgcer401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Dgcer401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Dgcer401ApplicationJson extends SpeakeasyBase {
    error?: Dgcer401ApplicationJsonErrorEnum;
    errorDescription?: Dgcer401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Dgcer404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Dgcer404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Dgcer404ApplicationJson extends SpeakeasyBase {
    error?: Dgcer404ApplicationJsonErrorEnum;
    errorDescription?: Dgcer404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Dgcer500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Dgcer500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Dgcer500ApplicationJson extends SpeakeasyBase {
    error?: Dgcer500ApplicationJsonErrorEnum;
    errorDescription?: Dgcer500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Dgcer502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Dgcer502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Dgcer502ApplicationJson extends SpeakeasyBase {
    error?: Dgcer502ApplicationJsonErrorEnum;
    errorDescription?: Dgcer502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Dgcer503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Dgcer503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Dgcer503ApplicationJson extends SpeakeasyBase {
    error?: Dgcer503ApplicationJsonErrorEnum;
    errorDescription?: Dgcer503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Dgcer504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Dgcer504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Dgcer504ApplicationJson extends SpeakeasyBase {
    error?: Dgcer504ApplicationJsonErrorEnum;
    errorDescription?: Dgcer504ApplicationJsonErrorDescriptionEnum;
}
export declare class DgcerRequest extends SpeakeasyBase {
    request?: DgcerRequestBody;
    security: DgcerSecurity;
}
export declare class DgcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    dgcer400ApplicationJsonObject?: Dgcer400ApplicationJson;
    dgcer401ApplicationJsonObject?: Dgcer401ApplicationJson;
    dgcer404ApplicationJsonObject?: Dgcer404ApplicationJson;
    dgcer500ApplicationJsonObject?: Dgcer500ApplicationJson;
    dgcer502ApplicationJsonObject?: Dgcer502ApplicationJson;
    dgcer503ApplicationJsonObject?: Dgcer503ApplicationJson;
    dgcer504ApplicationJsonObject?: Dgcer504ApplicationJson;
}
