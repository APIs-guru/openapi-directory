import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SsmgrRequestBodyCertificateParameters extends SpeakeasyBase {
    fullName: string;
    rroll: string;
    year: string;
}
export declare enum SsmgrRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class SsmgrRequestBody extends SpeakeasyBase {
    certificateParameters?: SsmgrRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: SsmgrRequestBodyFormatEnum;
    txnId: string;
}
export declare class SsmgrSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Ssmgr400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Ssmgr400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Ssmgr400ApplicationJson extends SpeakeasyBase {
    error?: Ssmgr400ApplicationJsonErrorEnum;
    errorDescription?: Ssmgr400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ssmgr401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Ssmgr401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Ssmgr401ApplicationJson extends SpeakeasyBase {
    error?: Ssmgr401ApplicationJsonErrorEnum;
    errorDescription?: Ssmgr401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ssmgr404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Ssmgr404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Ssmgr404ApplicationJson extends SpeakeasyBase {
    error?: Ssmgr404ApplicationJsonErrorEnum;
    errorDescription?: Ssmgr404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ssmgr500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Ssmgr500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Ssmgr500ApplicationJson extends SpeakeasyBase {
    error?: Ssmgr500ApplicationJsonErrorEnum;
    errorDescription?: Ssmgr500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ssmgr502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Ssmgr502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Ssmgr502ApplicationJson extends SpeakeasyBase {
    error?: Ssmgr502ApplicationJsonErrorEnum;
    errorDescription?: Ssmgr502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ssmgr503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Ssmgr503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Ssmgr503ApplicationJson extends SpeakeasyBase {
    error?: Ssmgr503ApplicationJsonErrorEnum;
    errorDescription?: Ssmgr503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ssmgr504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Ssmgr504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Ssmgr504ApplicationJson extends SpeakeasyBase {
    error?: Ssmgr504ApplicationJsonErrorEnum;
    errorDescription?: Ssmgr504ApplicationJsonErrorDescriptionEnum;
}
export declare class SsmgrRequest extends SpeakeasyBase {
    request?: SsmgrRequestBody;
    security: SsmgrSecurity;
}
export declare class SsmgrResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ssmgr400ApplicationJsonObject?: Ssmgr400ApplicationJson;
    ssmgr401ApplicationJsonObject?: Ssmgr401ApplicationJson;
    ssmgr404ApplicationJsonObject?: Ssmgr404ApplicationJson;
    ssmgr500ApplicationJsonObject?: Ssmgr500ApplicationJson;
    ssmgr502ApplicationJsonObject?: Ssmgr502ApplicationJson;
    ssmgr503ApplicationJsonObject?: Ssmgr503ApplicationJson;
    ssmgr504ApplicationJsonObject?: Ssmgr504ApplicationJson;
}
