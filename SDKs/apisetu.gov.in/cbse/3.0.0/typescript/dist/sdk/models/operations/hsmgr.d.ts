import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class HsmgrRequestBodyCertificateParameters extends SpeakeasyBase {
    fullName: string;
    rollno: string;
    year: string;
}
export declare enum HsmgrRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class HsmgrRequestBody extends SpeakeasyBase {
    certificateParameters?: HsmgrRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: HsmgrRequestBodyFormatEnum;
    txnId: string;
}
export declare class HsmgrSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class HsmgrRequest extends SpeakeasyBase {
    request?: HsmgrRequestBody;
    security: HsmgrSecurity;
}
export declare enum Hsmgr400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Hsmgr400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Hsmgr400ApplicationJson extends SpeakeasyBase {
    error?: Hsmgr400ApplicationJsonErrorEnum;
    errorDescription?: Hsmgr400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Hsmgr401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Hsmgr401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Hsmgr401ApplicationJson extends SpeakeasyBase {
    error?: Hsmgr401ApplicationJsonErrorEnum;
    errorDescription?: Hsmgr401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Hsmgr404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Hsmgr404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Hsmgr404ApplicationJson extends SpeakeasyBase {
    error?: Hsmgr404ApplicationJsonErrorEnum;
    errorDescription?: Hsmgr404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Hsmgr500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Hsmgr500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Hsmgr500ApplicationJson extends SpeakeasyBase {
    error?: Hsmgr500ApplicationJsonErrorEnum;
    errorDescription?: Hsmgr500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Hsmgr502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Hsmgr502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Hsmgr502ApplicationJson extends SpeakeasyBase {
    error?: Hsmgr502ApplicationJsonErrorEnum;
    errorDescription?: Hsmgr502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Hsmgr503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Hsmgr503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Hsmgr503ApplicationJson extends SpeakeasyBase {
    error?: Hsmgr503ApplicationJsonErrorEnum;
    errorDescription?: Hsmgr503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Hsmgr504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Hsmgr504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Hsmgr504ApplicationJson extends SpeakeasyBase {
    error?: Hsmgr504ApplicationJsonErrorEnum;
    errorDescription?: Hsmgr504ApplicationJsonErrorDescriptionEnum;
}
export declare class HsmgrResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    hsmgr400ApplicationJsonObject?: Hsmgr400ApplicationJson;
    hsmgr401ApplicationJsonObject?: Hsmgr401ApplicationJson;
    hsmgr404ApplicationJsonObject?: Hsmgr404ApplicationJson;
    hsmgr500ApplicationJsonObject?: Hsmgr500ApplicationJson;
    hsmgr502ApplicationJsonObject?: Hsmgr502ApplicationJson;
    hsmgr503ApplicationJsonObject?: Hsmgr503ApplicationJson;
    hsmgr504ApplicationJsonObject?: Hsmgr504ApplicationJson;
}
