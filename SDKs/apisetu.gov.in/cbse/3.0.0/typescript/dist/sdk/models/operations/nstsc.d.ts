import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NstscRequestBodyCertificateParameters extends SpeakeasyBase {
    fullName: string;
    rollno: string;
    year: string;
}
export declare enum NstscRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class NstscRequestBody extends SpeakeasyBase {
    certificateParameters?: NstscRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: NstscRequestBodyFormatEnum;
    txnId: string;
}
export declare class NstscSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Nstsc400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Nstsc400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Nstsc400ApplicationJson extends SpeakeasyBase {
    error?: Nstsc400ApplicationJsonErrorEnum;
    errorDescription?: Nstsc400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Nstsc401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Nstsc401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Nstsc401ApplicationJson extends SpeakeasyBase {
    error?: Nstsc401ApplicationJsonErrorEnum;
    errorDescription?: Nstsc401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Nstsc404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Nstsc404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Nstsc404ApplicationJson extends SpeakeasyBase {
    error?: Nstsc404ApplicationJsonErrorEnum;
    errorDescription?: Nstsc404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Nstsc500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Nstsc500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Nstsc500ApplicationJson extends SpeakeasyBase {
    error?: Nstsc500ApplicationJsonErrorEnum;
    errorDescription?: Nstsc500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Nstsc502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Nstsc502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Nstsc502ApplicationJson extends SpeakeasyBase {
    error?: Nstsc502ApplicationJsonErrorEnum;
    errorDescription?: Nstsc502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Nstsc503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Nstsc503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Nstsc503ApplicationJson extends SpeakeasyBase {
    error?: Nstsc503ApplicationJsonErrorEnum;
    errorDescription?: Nstsc503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Nstsc504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Nstsc504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Nstsc504ApplicationJson extends SpeakeasyBase {
    error?: Nstsc504ApplicationJsonErrorEnum;
    errorDescription?: Nstsc504ApplicationJsonErrorDescriptionEnum;
}
export declare class NstscRequest extends SpeakeasyBase {
    request?: NstscRequestBody;
    security: NstscSecurity;
}
export declare class NstscResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    nstsc400ApplicationJsonObject?: Nstsc400ApplicationJson;
    nstsc401ApplicationJsonObject?: Nstsc401ApplicationJson;
    nstsc404ApplicationJsonObject?: Nstsc404ApplicationJson;
    nstsc500ApplicationJsonObject?: Nstsc500ApplicationJson;
    nstsc502ApplicationJsonObject?: Nstsc502ApplicationJson;
    nstsc503ApplicationJsonObject?: Nstsc503ApplicationJson;
    nstsc504ApplicationJsonObject?: Nstsc504ApplicationJson;
}
