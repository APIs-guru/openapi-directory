import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DgmstRequestBodyCertificateParameters extends SpeakeasyBase {
    fullName: string;
    rroll: string;
    sem: string;
}
export declare enum DgmstRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class DgmstRequestBody extends SpeakeasyBase {
    certificateParameters?: DgmstRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: DgmstRequestBodyFormatEnum;
    txnId: string;
}
export declare class DgmstSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Dgmst400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Dgmst400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Dgmst400ApplicationJson extends SpeakeasyBase {
    error?: Dgmst400ApplicationJsonErrorEnum;
    errorDescription?: Dgmst400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Dgmst401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Dgmst401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Dgmst401ApplicationJson extends SpeakeasyBase {
    error?: Dgmst401ApplicationJsonErrorEnum;
    errorDescription?: Dgmst401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Dgmst404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Dgmst404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Dgmst404ApplicationJson extends SpeakeasyBase {
    error?: Dgmst404ApplicationJsonErrorEnum;
    errorDescription?: Dgmst404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Dgmst500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Dgmst500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Dgmst500ApplicationJson extends SpeakeasyBase {
    error?: Dgmst500ApplicationJsonErrorEnum;
    errorDescription?: Dgmst500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Dgmst502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Dgmst502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Dgmst502ApplicationJson extends SpeakeasyBase {
    error?: Dgmst502ApplicationJsonErrorEnum;
    errorDescription?: Dgmst502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Dgmst503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Dgmst503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Dgmst503ApplicationJson extends SpeakeasyBase {
    error?: Dgmst503ApplicationJsonErrorEnum;
    errorDescription?: Dgmst503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Dgmst504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Dgmst504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Dgmst504ApplicationJson extends SpeakeasyBase {
    error?: Dgmst504ApplicationJsonErrorEnum;
    errorDescription?: Dgmst504ApplicationJsonErrorDescriptionEnum;
}
export declare class DgmstRequest extends SpeakeasyBase {
    request?: DgmstRequestBody;
    security: DgmstSecurity;
}
export declare class DgmstResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    dgmst400ApplicationJsonObject?: Dgmst400ApplicationJson;
    dgmst401ApplicationJsonObject?: Dgmst401ApplicationJson;
    dgmst404ApplicationJsonObject?: Dgmst404ApplicationJson;
    dgmst500ApplicationJsonObject?: Dgmst500ApplicationJson;
    dgmst502ApplicationJsonObject?: Dgmst502ApplicationJson;
    dgmst503ApplicationJsonObject?: Dgmst503ApplicationJson;
    dgmst504ApplicationJsonObject?: Dgmst504ApplicationJson;
}
