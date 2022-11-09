import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class AdcrdRequestBodyCertificateParameters extends SpeakeasyBase {
    applicationNo: string;
    dob: string;
    examYear: string;
    fullName: string;
}
export declare enum AdcrdRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class AdcrdRequestBody extends SpeakeasyBase {
    certificateParameters?: AdcrdRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: AdcrdRequestBodyFormatEnum;
    txnId: string;
}
export declare class AdcrdSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class AdcrdRequest extends SpeakeasyBase {
    request?: AdcrdRequestBody;
    security: AdcrdSecurity;
}
export declare enum Adcrd400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Adcrd400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Adcrd400ApplicationJson extends SpeakeasyBase {
    error?: Adcrd400ApplicationJsonErrorEnum;
    errorDescription?: Adcrd400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Adcrd401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Adcrd401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Adcrd401ApplicationJson extends SpeakeasyBase {
    error?: Adcrd401ApplicationJsonErrorEnum;
    errorDescription?: Adcrd401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Adcrd404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Adcrd404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Adcrd404ApplicationJson extends SpeakeasyBase {
    error?: Adcrd404ApplicationJsonErrorEnum;
    errorDescription?: Adcrd404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Adcrd500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Adcrd500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Adcrd500ApplicationJson extends SpeakeasyBase {
    error?: Adcrd500ApplicationJsonErrorEnum;
    errorDescription?: Adcrd500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Adcrd502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Adcrd502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Adcrd502ApplicationJson extends SpeakeasyBase {
    error?: Adcrd502ApplicationJsonErrorEnum;
    errorDescription?: Adcrd502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Adcrd503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Adcrd503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Adcrd503ApplicationJson extends SpeakeasyBase {
    error?: Adcrd503ApplicationJsonErrorEnum;
    errorDescription?: Adcrd503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Adcrd504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Adcrd504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Adcrd504ApplicationJson extends SpeakeasyBase {
    error?: Adcrd504ApplicationJsonErrorEnum;
    errorDescription?: Adcrd504ApplicationJsonErrorDescriptionEnum;
}
export declare class AdcrdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    adcrd400ApplicationJsonObject?: Adcrd400ApplicationJson;
    adcrd401ApplicationJsonObject?: Adcrd401ApplicationJson;
    adcrd404ApplicationJsonObject?: Adcrd404ApplicationJson;
    adcrd500ApplicationJsonObject?: Adcrd500ApplicationJson;
    adcrd502ApplicationJsonObject?: Adcrd502ApplicationJson;
    adcrd503ApplicationJsonObject?: Adcrd503ApplicationJson;
    adcrd504ApplicationJsonObject?: Adcrd504ApplicationJson;
}
