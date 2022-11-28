import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AemtwRequestBodyCertificateParameters extends SpeakeasyBase {
    udf1: string;
}
export declare enum AemtwRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class AemtwRequestBody extends SpeakeasyBase {
    certificateParameters?: AemtwRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: AemtwRequestBodyFormatEnum;
    txnId: string;
}
export declare class AemtwSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Aemtw400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Aemtw400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Aemtw400ApplicationJson extends SpeakeasyBase {
    error?: Aemtw400ApplicationJsonErrorEnum;
    errorDescription?: Aemtw400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Aemtw401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Aemtw401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Aemtw401ApplicationJson extends SpeakeasyBase {
    error?: Aemtw401ApplicationJsonErrorEnum;
    errorDescription?: Aemtw401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Aemtw404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Aemtw404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Aemtw404ApplicationJson extends SpeakeasyBase {
    error?: Aemtw404ApplicationJsonErrorEnum;
    errorDescription?: Aemtw404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Aemtw500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Aemtw500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Aemtw500ApplicationJson extends SpeakeasyBase {
    error?: Aemtw500ApplicationJsonErrorEnum;
    errorDescription?: Aemtw500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Aemtw502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Aemtw502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Aemtw502ApplicationJson extends SpeakeasyBase {
    error?: Aemtw502ApplicationJsonErrorEnum;
    errorDescription?: Aemtw502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Aemtw503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Aemtw503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Aemtw503ApplicationJson extends SpeakeasyBase {
    error?: Aemtw503ApplicationJsonErrorEnum;
    errorDescription?: Aemtw503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Aemtw504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Aemtw504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Aemtw504ApplicationJson extends SpeakeasyBase {
    error?: Aemtw504ApplicationJsonErrorEnum;
    errorDescription?: Aemtw504ApplicationJsonErrorDescriptionEnum;
}
export declare class AemtwRequest extends SpeakeasyBase {
    request?: AemtwRequestBody;
    security: AemtwSecurity;
}
export declare class AemtwResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    aemtw400ApplicationJsonObject?: Aemtw400ApplicationJson;
    aemtw401ApplicationJsonObject?: Aemtw401ApplicationJson;
    aemtw404ApplicationJsonObject?: Aemtw404ApplicationJson;
    aemtw500ApplicationJsonObject?: Aemtw500ApplicationJson;
    aemtw502ApplicationJsonObject?: Aemtw502ApplicationJson;
    aemtw503ApplicationJsonObject?: Aemtw503ApplicationJson;
    aemtw504ApplicationJsonObject?: Aemtw504ApplicationJson;
}
