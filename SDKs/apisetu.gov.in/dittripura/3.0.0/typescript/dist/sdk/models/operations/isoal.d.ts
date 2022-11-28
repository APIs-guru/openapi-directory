import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IsoalRequestBodyCertificateParameters extends SpeakeasyBase {
    refNo: string;
    tokenNo: string;
}
export declare enum IsoalRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class IsoalRequestBody extends SpeakeasyBase {
    certificateParameters?: IsoalRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: IsoalRequestBodyFormatEnum;
    txnId: string;
}
export declare class IsoalSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Isoal400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Isoal400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Isoal400ApplicationJson extends SpeakeasyBase {
    error?: Isoal400ApplicationJsonErrorEnum;
    errorDescription?: Isoal400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Isoal401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Isoal401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Isoal401ApplicationJson extends SpeakeasyBase {
    error?: Isoal401ApplicationJsonErrorEnum;
    errorDescription?: Isoal401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Isoal404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Isoal404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Isoal404ApplicationJson extends SpeakeasyBase {
    error?: Isoal404ApplicationJsonErrorEnum;
    errorDescription?: Isoal404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Isoal500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Isoal500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Isoal500ApplicationJson extends SpeakeasyBase {
    error?: Isoal500ApplicationJsonErrorEnum;
    errorDescription?: Isoal500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Isoal502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Isoal502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Isoal502ApplicationJson extends SpeakeasyBase {
    error?: Isoal502ApplicationJsonErrorEnum;
    errorDescription?: Isoal502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Isoal503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Isoal503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Isoal503ApplicationJson extends SpeakeasyBase {
    error?: Isoal503ApplicationJsonErrorEnum;
    errorDescription?: Isoal503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Isoal504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Isoal504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Isoal504ApplicationJson extends SpeakeasyBase {
    error?: Isoal504ApplicationJsonErrorEnum;
    errorDescription?: Isoal504ApplicationJsonErrorDescriptionEnum;
}
export declare class IsoalRequest extends SpeakeasyBase {
    request?: IsoalRequestBody;
    security: IsoalSecurity;
}
export declare class IsoalResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    isoal400ApplicationJsonObject?: Isoal400ApplicationJson;
    isoal401ApplicationJsonObject?: Isoal401ApplicationJson;
    isoal404ApplicationJsonObject?: Isoal404ApplicationJson;
    isoal500ApplicationJsonObject?: Isoal500ApplicationJson;
    isoal502ApplicationJsonObject?: Isoal502ApplicationJson;
    isoal503ApplicationJsonObject?: Isoal503ApplicationJson;
    isoal504ApplicationJsonObject?: Isoal504ApplicationJson;
}
