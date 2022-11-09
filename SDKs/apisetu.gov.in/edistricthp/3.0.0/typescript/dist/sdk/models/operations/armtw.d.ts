import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ArmtwRequestBodyCertificateParameters extends SpeakeasyBase {
    udf1: string;
}
export declare enum ArmtwRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class ArmtwRequestBody extends SpeakeasyBase {
    certificateParameters?: ArmtwRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: ArmtwRequestBodyFormatEnum;
    txnId: string;
}
export declare class ArmtwSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class ArmtwRequest extends SpeakeasyBase {
    request?: ArmtwRequestBody;
    security: ArmtwSecurity;
}
export declare enum Armtw400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Armtw400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Armtw400ApplicationJson extends SpeakeasyBase {
    error?: Armtw400ApplicationJsonErrorEnum;
    errorDescription?: Armtw400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Armtw401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Armtw401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Armtw401ApplicationJson extends SpeakeasyBase {
    error?: Armtw401ApplicationJsonErrorEnum;
    errorDescription?: Armtw401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Armtw404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Armtw404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Armtw404ApplicationJson extends SpeakeasyBase {
    error?: Armtw404ApplicationJsonErrorEnum;
    errorDescription?: Armtw404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Armtw500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Armtw500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Armtw500ApplicationJson extends SpeakeasyBase {
    error?: Armtw500ApplicationJsonErrorEnum;
    errorDescription?: Armtw500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Armtw502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Armtw502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Armtw502ApplicationJson extends SpeakeasyBase {
    error?: Armtw502ApplicationJsonErrorEnum;
    errorDescription?: Armtw502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Armtw503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Armtw503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Armtw503ApplicationJson extends SpeakeasyBase {
    error?: Armtw503ApplicationJsonErrorEnum;
    errorDescription?: Armtw503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Armtw504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Armtw504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Armtw504ApplicationJson extends SpeakeasyBase {
    error?: Armtw504ApplicationJsonErrorEnum;
    errorDescription?: Armtw504ApplicationJsonErrorDescriptionEnum;
}
export declare class ArmtwResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    armtw400ApplicationJsonObject?: Armtw400ApplicationJson;
    armtw401ApplicationJsonObject?: Armtw401ApplicationJson;
    armtw404ApplicationJsonObject?: Armtw404ApplicationJson;
    armtw500ApplicationJsonObject?: Armtw500ApplicationJson;
    armtw502ApplicationJsonObject?: Armtw502ApplicationJson;
    armtw503ApplicationJsonObject?: Armtw503ApplicationJson;
    armtw504ApplicationJsonObject?: Armtw504ApplicationJson;
}
