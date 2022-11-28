import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApmclRequestBodyCertificateParameters extends SpeakeasyBase {
    documentNumber: string;
}
export declare enum ApmclRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class ApmclRequestBody extends SpeakeasyBase {
    certificateParameters?: ApmclRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: ApmclRequestBodyFormatEnum;
    txnId: string;
}
export declare class ApmclSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Apmcl400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Apmcl400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Apmcl400ApplicationJson extends SpeakeasyBase {
    error?: Apmcl400ApplicationJsonErrorEnum;
    errorDescription?: Apmcl400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Apmcl401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Apmcl401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Apmcl401ApplicationJson extends SpeakeasyBase {
    error?: Apmcl401ApplicationJsonErrorEnum;
    errorDescription?: Apmcl401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Apmcl404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Apmcl404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Apmcl404ApplicationJson extends SpeakeasyBase {
    error?: Apmcl404ApplicationJsonErrorEnum;
    errorDescription?: Apmcl404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Apmcl500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Apmcl500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Apmcl500ApplicationJson extends SpeakeasyBase {
    error?: Apmcl500ApplicationJsonErrorEnum;
    errorDescription?: Apmcl500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Apmcl502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Apmcl502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Apmcl502ApplicationJson extends SpeakeasyBase {
    error?: Apmcl502ApplicationJsonErrorEnum;
    errorDescription?: Apmcl502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Apmcl503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Apmcl503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Apmcl503ApplicationJson extends SpeakeasyBase {
    error?: Apmcl503ApplicationJsonErrorEnum;
    errorDescription?: Apmcl503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Apmcl504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Apmcl504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Apmcl504ApplicationJson extends SpeakeasyBase {
    error?: Apmcl504ApplicationJsonErrorEnum;
    errorDescription?: Apmcl504ApplicationJsonErrorDescriptionEnum;
}
export declare class ApmclRequest extends SpeakeasyBase {
    request?: ApmclRequestBody;
    security: ApmclSecurity;
}
export declare class ApmclResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    apmcl400ApplicationJsonObject?: Apmcl400ApplicationJson;
    apmcl401ApplicationJsonObject?: Apmcl401ApplicationJson;
    apmcl404ApplicationJsonObject?: Apmcl404ApplicationJson;
    apmcl500ApplicationJsonObject?: Apmcl500ApplicationJson;
    apmcl502ApplicationJsonObject?: Apmcl502ApplicationJson;
    apmcl503ApplicationJsonObject?: Apmcl503ApplicationJson;
    apmcl504ApplicationJsonObject?: Apmcl504ApplicationJson;
}
