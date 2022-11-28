import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NsescRequestBodyCertificateParameters extends SpeakeasyBase {
    fullName: string;
    rollno: string;
    year: string;
}
export declare enum NsescRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class NsescRequestBody extends SpeakeasyBase {
    certificateParameters?: NsescRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: NsescRequestBodyFormatEnum;
    txnId: string;
}
export declare class NsescSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Nsesc400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Nsesc400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Nsesc400ApplicationJson extends SpeakeasyBase {
    error?: Nsesc400ApplicationJsonErrorEnum;
    errorDescription?: Nsesc400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Nsesc401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Nsesc401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Nsesc401ApplicationJson extends SpeakeasyBase {
    error?: Nsesc401ApplicationJsonErrorEnum;
    errorDescription?: Nsesc401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Nsesc404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Nsesc404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Nsesc404ApplicationJson extends SpeakeasyBase {
    error?: Nsesc404ApplicationJsonErrorEnum;
    errorDescription?: Nsesc404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Nsesc500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Nsesc500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Nsesc500ApplicationJson extends SpeakeasyBase {
    error?: Nsesc500ApplicationJsonErrorEnum;
    errorDescription?: Nsesc500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Nsesc502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Nsesc502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Nsesc502ApplicationJson extends SpeakeasyBase {
    error?: Nsesc502ApplicationJsonErrorEnum;
    errorDescription?: Nsesc502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Nsesc503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Nsesc503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Nsesc503ApplicationJson extends SpeakeasyBase {
    error?: Nsesc503ApplicationJsonErrorEnum;
    errorDescription?: Nsesc503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Nsesc504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Nsesc504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Nsesc504ApplicationJson extends SpeakeasyBase {
    error?: Nsesc504ApplicationJsonErrorEnum;
    errorDescription?: Nsesc504ApplicationJsonErrorDescriptionEnum;
}
export declare class NsescRequest extends SpeakeasyBase {
    request?: NsescRequestBody;
    security: NsescSecurity;
}
export declare class NsescResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    nsesc400ApplicationJsonObject?: Nsesc400ApplicationJson;
    nsesc401ApplicationJsonObject?: Nsesc401ApplicationJson;
    nsesc404ApplicationJsonObject?: Nsesc404ApplicationJson;
    nsesc500ApplicationJsonObject?: Nsesc500ApplicationJson;
    nsesc502ApplicationJsonObject?: Nsesc502ApplicationJson;
    nsesc503ApplicationJsonObject?: Nsesc503ApplicationJson;
    nsesc504ApplicationJsonObject?: Nsesc504ApplicationJson;
}
