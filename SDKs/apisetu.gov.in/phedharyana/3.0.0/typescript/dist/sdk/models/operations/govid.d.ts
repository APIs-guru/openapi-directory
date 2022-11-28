import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GovidRequestBodyCertificateParameters extends SpeakeasyBase {
    uniqueid: string;
}
export declare enum GovidRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class GovidRequestBody extends SpeakeasyBase {
    certificateParameters?: GovidRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: GovidRequestBodyFormatEnum;
    txnId: string;
}
export declare class GovidSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Govid400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Govid400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Govid400ApplicationJson extends SpeakeasyBase {
    error?: Govid400ApplicationJsonErrorEnum;
    errorDescription?: Govid400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Govid401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Govid401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Govid401ApplicationJson extends SpeakeasyBase {
    error?: Govid401ApplicationJsonErrorEnum;
    errorDescription?: Govid401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Govid404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Govid404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Govid404ApplicationJson extends SpeakeasyBase {
    error?: Govid404ApplicationJsonErrorEnum;
    errorDescription?: Govid404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Govid500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Govid500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Govid500ApplicationJson extends SpeakeasyBase {
    error?: Govid500ApplicationJsonErrorEnum;
    errorDescription?: Govid500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Govid502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Govid502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Govid502ApplicationJson extends SpeakeasyBase {
    error?: Govid502ApplicationJsonErrorEnum;
    errorDescription?: Govid502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Govid503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Govid503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Govid503ApplicationJson extends SpeakeasyBase {
    error?: Govid503ApplicationJsonErrorEnum;
    errorDescription?: Govid503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Govid504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Govid504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Govid504ApplicationJson extends SpeakeasyBase {
    error?: Govid504ApplicationJsonErrorEnum;
    errorDescription?: Govid504ApplicationJsonErrorDescriptionEnum;
}
export declare class GovidRequest extends SpeakeasyBase {
    request?: GovidRequestBody;
    security: GovidSecurity;
}
export declare class GovidResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    govid400ApplicationJsonObject?: Govid400ApplicationJson;
    govid401ApplicationJsonObject?: Govid401ApplicationJson;
    govid404ApplicationJsonObject?: Govid404ApplicationJson;
    govid500ApplicationJsonObject?: Govid500ApplicationJson;
    govid502ApplicationJsonObject?: Govid502ApplicationJson;
    govid503ApplicationJsonObject?: Govid503ApplicationJson;
    govid504ApplicationJsonObject?: Govid504ApplicationJson;
}
