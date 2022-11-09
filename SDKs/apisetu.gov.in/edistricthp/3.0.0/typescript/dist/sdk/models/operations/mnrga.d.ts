import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class MnrgaRequestBodyCertificateParameters extends SpeakeasyBase {
    udf1: string;
}
export declare enum MnrgaRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class MnrgaRequestBody extends SpeakeasyBase {
    certificateParameters?: MnrgaRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: MnrgaRequestBodyFormatEnum;
    txnId: string;
}
export declare class MnrgaSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare class MnrgaRequest extends SpeakeasyBase {
    request?: MnrgaRequestBody;
    security: MnrgaSecurity;
}
export declare enum Mnrga400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Mnrga400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Mnrga400ApplicationJson extends SpeakeasyBase {
    error?: Mnrga400ApplicationJsonErrorEnum;
    errorDescription?: Mnrga400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Mnrga401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Mnrga401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Mnrga401ApplicationJson extends SpeakeasyBase {
    error?: Mnrga401ApplicationJsonErrorEnum;
    errorDescription?: Mnrga401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Mnrga404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Mnrga404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Mnrga404ApplicationJson extends SpeakeasyBase {
    error?: Mnrga404ApplicationJsonErrorEnum;
    errorDescription?: Mnrga404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Mnrga500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Mnrga500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Mnrga500ApplicationJson extends SpeakeasyBase {
    error?: Mnrga500ApplicationJsonErrorEnum;
    errorDescription?: Mnrga500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Mnrga502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Mnrga502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Mnrga502ApplicationJson extends SpeakeasyBase {
    error?: Mnrga502ApplicationJsonErrorEnum;
    errorDescription?: Mnrga502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Mnrga503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Mnrga503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Mnrga503ApplicationJson extends SpeakeasyBase {
    error?: Mnrga503ApplicationJsonErrorEnum;
    errorDescription?: Mnrga503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Mnrga504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Mnrga504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Mnrga504ApplicationJson extends SpeakeasyBase {
    error?: Mnrga504ApplicationJsonErrorEnum;
    errorDescription?: Mnrga504ApplicationJsonErrorDescriptionEnum;
}
export declare class MnrgaResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    mnrga400ApplicationJsonObject?: Mnrga400ApplicationJson;
    mnrga401ApplicationJsonObject?: Mnrga401ApplicationJson;
    mnrga404ApplicationJsonObject?: Mnrga404ApplicationJson;
    mnrga500ApplicationJsonObject?: Mnrga500ApplicationJson;
    mnrga502ApplicationJsonObject?: Mnrga502ApplicationJson;
    mnrga503ApplicationJsonObject?: Mnrga503ApplicationJson;
    mnrga504ApplicationJsonObject?: Mnrga504ApplicationJson;
}
