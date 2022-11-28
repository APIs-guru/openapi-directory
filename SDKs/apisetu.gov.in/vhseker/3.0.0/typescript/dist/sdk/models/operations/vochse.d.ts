import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class VochseRequestBodyCertificateParameters extends SpeakeasyBase {
    dob: string;
    fullName: string;
    regno: string;
    year: string;
    type: string;
}
export declare enum VochseRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class VochseRequestBody extends SpeakeasyBase {
    certificateParameters?: VochseRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: VochseRequestBodyFormatEnum;
    txnId: string;
}
export declare class VochseSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Vochse400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Vochse400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Vochse400ApplicationJson extends SpeakeasyBase {
    error?: Vochse400ApplicationJsonErrorEnum;
    errorDescription?: Vochse400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Vochse401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Vochse401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Vochse401ApplicationJson extends SpeakeasyBase {
    error?: Vochse401ApplicationJsonErrorEnum;
    errorDescription?: Vochse401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Vochse404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Vochse404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Vochse404ApplicationJson extends SpeakeasyBase {
    error?: Vochse404ApplicationJsonErrorEnum;
    errorDescription?: Vochse404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Vochse500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Vochse500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Vochse500ApplicationJson extends SpeakeasyBase {
    error?: Vochse500ApplicationJsonErrorEnum;
    errorDescription?: Vochse500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Vochse502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Vochse502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Vochse502ApplicationJson extends SpeakeasyBase {
    error?: Vochse502ApplicationJsonErrorEnum;
    errorDescription?: Vochse502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Vochse503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Vochse503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Vochse503ApplicationJson extends SpeakeasyBase {
    error?: Vochse503ApplicationJsonErrorEnum;
    errorDescription?: Vochse503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Vochse504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Vochse504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Vochse504ApplicationJson extends SpeakeasyBase {
    error?: Vochse504ApplicationJsonErrorEnum;
    errorDescription?: Vochse504ApplicationJsonErrorDescriptionEnum;
}
export declare class VochseRequest extends SpeakeasyBase {
    request?: VochseRequestBody;
    security: VochseSecurity;
}
export declare class VochseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    vochse400ApplicationJsonObject?: Vochse400ApplicationJson;
    vochse401ApplicationJsonObject?: Vochse401ApplicationJson;
    vochse404ApplicationJsonObject?: Vochse404ApplicationJson;
    vochse500ApplicationJsonObject?: Vochse500ApplicationJson;
    vochse502ApplicationJsonObject?: Vochse502ApplicationJson;
    vochse503ApplicationJsonObject?: Vochse503ApplicationJson;
    vochse504ApplicationJsonObject?: Vochse504ApplicationJson;
}
