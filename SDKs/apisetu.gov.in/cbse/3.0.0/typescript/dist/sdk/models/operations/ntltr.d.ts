import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class NtltrRequestBodyCertificateParameters extends SpeakeasyBase {
    fullName: string;
    rollno: string;
    year: string;
}
export declare enum NtltrRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class NtltrRequestBody extends SpeakeasyBase {
    certificateParameters?: NtltrRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: NtltrRequestBodyFormatEnum;
    txnId: string;
}
export declare class NtltrSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class NtltrRequest extends SpeakeasyBase {
    request?: NtltrRequestBody;
    security: NtltrSecurity;
}
export declare enum Ntltr400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Ntltr400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Ntltr400ApplicationJson extends SpeakeasyBase {
    error?: Ntltr400ApplicationJsonErrorEnum;
    errorDescription?: Ntltr400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ntltr401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Ntltr401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Ntltr401ApplicationJson extends SpeakeasyBase {
    error?: Ntltr401ApplicationJsonErrorEnum;
    errorDescription?: Ntltr401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ntltr404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Ntltr404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Ntltr404ApplicationJson extends SpeakeasyBase {
    error?: Ntltr404ApplicationJsonErrorEnum;
    errorDescription?: Ntltr404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ntltr500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Ntltr500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Ntltr500ApplicationJson extends SpeakeasyBase {
    error?: Ntltr500ApplicationJsonErrorEnum;
    errorDescription?: Ntltr500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ntltr502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Ntltr502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Ntltr502ApplicationJson extends SpeakeasyBase {
    error?: Ntltr502ApplicationJsonErrorEnum;
    errorDescription?: Ntltr502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ntltr503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Ntltr503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Ntltr503ApplicationJson extends SpeakeasyBase {
    error?: Ntltr503ApplicationJsonErrorEnum;
    errorDescription?: Ntltr503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ntltr504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Ntltr504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Ntltr504ApplicationJson extends SpeakeasyBase {
    error?: Ntltr504ApplicationJsonErrorEnum;
    errorDescription?: Ntltr504ApplicationJsonErrorDescriptionEnum;
}
export declare class NtltrResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ntltr400ApplicationJsonObject?: Ntltr400ApplicationJson;
    ntltr401ApplicationJsonObject?: Ntltr401ApplicationJson;
    ntltr404ApplicationJsonObject?: Ntltr404ApplicationJson;
    ntltr500ApplicationJsonObject?: Ntltr500ApplicationJson;
    ntltr502ApplicationJsonObject?: Ntltr502ApplicationJson;
    ntltr503ApplicationJsonObject?: Ntltr503ApplicationJson;
    ntltr504ApplicationJsonObject?: Ntltr504ApplicationJson;
}
