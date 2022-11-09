import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class NtmksRequestBodyCertificateParameters extends SpeakeasyBase {
    fullName: string;
    rollno: string;
    year: string;
}
export declare enum NtmksRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class NtmksRequestBody extends SpeakeasyBase {
    certificateParameters?: NtmksRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: NtmksRequestBodyFormatEnum;
    txnId: string;
}
export declare class NtmksSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class NtmksRequest extends SpeakeasyBase {
    request?: NtmksRequestBody;
    security: NtmksSecurity;
}
export declare enum Ntmks400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Ntmks400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Ntmks400ApplicationJson extends SpeakeasyBase {
    error?: Ntmks400ApplicationJsonErrorEnum;
    errorDescription?: Ntmks400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ntmks401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Ntmks401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Ntmks401ApplicationJson extends SpeakeasyBase {
    error?: Ntmks401ApplicationJsonErrorEnum;
    errorDescription?: Ntmks401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ntmks404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Ntmks404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Ntmks404ApplicationJson extends SpeakeasyBase {
    error?: Ntmks404ApplicationJsonErrorEnum;
    errorDescription?: Ntmks404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ntmks500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Ntmks500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Ntmks500ApplicationJson extends SpeakeasyBase {
    error?: Ntmks500ApplicationJsonErrorEnum;
    errorDescription?: Ntmks500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ntmks502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Ntmks502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Ntmks502ApplicationJson extends SpeakeasyBase {
    error?: Ntmks502ApplicationJsonErrorEnum;
    errorDescription?: Ntmks502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ntmks503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Ntmks503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Ntmks503ApplicationJson extends SpeakeasyBase {
    error?: Ntmks503ApplicationJsonErrorEnum;
    errorDescription?: Ntmks503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ntmks504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Ntmks504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Ntmks504ApplicationJson extends SpeakeasyBase {
    error?: Ntmks504ApplicationJsonErrorEnum;
    errorDescription?: Ntmks504ApplicationJsonErrorDescriptionEnum;
}
export declare class NtmksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ntmks400ApplicationJsonObject?: Ntmks400ApplicationJson;
    ntmks401ApplicationJsonObject?: Ntmks401ApplicationJson;
    ntmks404ApplicationJsonObject?: Ntmks404ApplicationJson;
    ntmks500ApplicationJsonObject?: Ntmks500ApplicationJson;
    ntmks502ApplicationJsonObject?: Ntmks502ApplicationJson;
    ntmks503ApplicationJsonObject?: Ntmks503ApplicationJson;
    ntmks504ApplicationJsonObject?: Ntmks504ApplicationJson;
}
