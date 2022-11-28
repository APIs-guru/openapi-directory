import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ImporterExporterCodeVerificationApiPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=iec" })
  iec: string;
}


export class ImporterExporterCodeVerificationApiSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey?: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  clientId?: shared.SchemeClientId;
}


export class ImporterExporterCodeVerificationApi200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addressLine1" })
  addressLine1: string;

  @SpeakeasyMetadata({ data: "json, name=addressLine2" })
  addressLine2: string;

  @SpeakeasyMetadata({ data: "json, name=branch" })
  branch: any[];

  @SpeakeasyMetadata({ data: "json, name=city" })
  city: string;

  @SpeakeasyMetadata({ data: "json, name=dataAsOn" })
  dataAsOn: Date;

  @SpeakeasyMetadata({ data: "json, name=directors" })
  directors: any[];

  @SpeakeasyMetadata({ data: "json, name=entityName" })
  entityName: string;

  @SpeakeasyMetadata({ data: "json, name=exporterType" })
  exporterType: string;

  @SpeakeasyMetadata({ data: "json, name=iec" })
  iec: string;

  @SpeakeasyMetadata({ data: "json, name=iecIssueDate" })
  iecIssueDate: string;

  @SpeakeasyMetadata({ data: "json, name=iecModificationDate" })
  iecModificationDate: string;

  @SpeakeasyMetadata({ data: "json, name=iecStatus" })
  iecStatus: string;

  @SpeakeasyMetadata({ data: "json, name=natureOfConcern" })
  natureOfConcern: string;

  @SpeakeasyMetadata({ data: "json, name=pan" })
  pan: string;

  @SpeakeasyMetadata({ data: "json, name=pin" })
  pin: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: string;
}

export enum ImporterExporterCodeVerificationApi400ApplicationJsonErrorEnum {
    InvalidParameter = "invalid parameter",
    MissingParameter = "missing parameter"
}

export enum ImporterExporterCodeVerificationApi400ApplicationJsonErrorDescriptionEnum {
    BadRequest = "Bad request",
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters."
}


export class ImporterExporterCodeVerificationApi400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: ImporterExporterCodeVerificationApi400ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: ImporterExporterCodeVerificationApi400ApplicationJsonErrorDescriptionEnum;
}

export enum ImporterExporterCodeVerificationApi401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}

export enum ImporterExporterCodeVerificationApi401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}


export class ImporterExporterCodeVerificationApi401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: ImporterExporterCodeVerificationApi401ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: ImporterExporterCodeVerificationApi401ApplicationJsonErrorDescriptionEnum;
}

export enum ImporterExporterCodeVerificationApi404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "Url not found"
}

export enum ImporterExporterCodeVerificationApi404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect."
}


export class ImporterExporterCodeVerificationApi404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: ImporterExporterCodeVerificationApi404ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: ImporterExporterCodeVerificationApi404ApplicationJsonErrorDescriptionEnum;
}

export enum ImporterExporterCodeVerificationApi500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}

export enum ImporterExporterCodeVerificationApi500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}


export class ImporterExporterCodeVerificationApi500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: ImporterExporterCodeVerificationApi500ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: ImporterExporterCodeVerificationApi500ApplicationJsonErrorDescriptionEnum;
}

export enum ImporterExporterCodeVerificationApi502ApplicationJsonErrorEnum {
    BadGateway = "bad gateway"
}

export enum ImporterExporterCodeVerificationApi502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response."
}


export class ImporterExporterCodeVerificationApi502ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: ImporterExporterCodeVerificationApi502ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: ImporterExporterCodeVerificationApi502ApplicationJsonErrorDescriptionEnum;
}

export enum ImporterExporterCodeVerificationApi503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}

export enum ImporterExporterCodeVerificationApi503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}


export class ImporterExporterCodeVerificationApi503ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: ImporterExporterCodeVerificationApi503ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: ImporterExporterCodeVerificationApi503ApplicationJsonErrorDescriptionEnum;
}

export enum ImporterExporterCodeVerificationApi504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}

export enum ImporterExporterCodeVerificationApi504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}


export class ImporterExporterCodeVerificationApi504ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: ImporterExporterCodeVerificationApi504ApplicationJsonErrorEnum;

  @SpeakeasyMetadata({ data: "json, name=errorDescription" })
  errorDescription?: ImporterExporterCodeVerificationApi504ApplicationJsonErrorDescriptionEnum;
}


export class ImporterExporterCodeVerificationApiRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ImporterExporterCodeVerificationApiPathParams;

  @SpeakeasyMetadata()
  security: ImporterExporterCodeVerificationApiSecurity;
}


export class ImporterExporterCodeVerificationApiResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  importerExporterCodeVerificationApi200ApplicationJsonObject?: ImporterExporterCodeVerificationApi200ApplicationJson;

  @SpeakeasyMetadata()
  importerExporterCodeVerificationApi400ApplicationJsonObject?: ImporterExporterCodeVerificationApi400ApplicationJson;

  @SpeakeasyMetadata()
  importerExporterCodeVerificationApi401ApplicationJsonObject?: ImporterExporterCodeVerificationApi401ApplicationJson;

  @SpeakeasyMetadata()
  importerExporterCodeVerificationApi404ApplicationJsonObject?: ImporterExporterCodeVerificationApi404ApplicationJson;

  @SpeakeasyMetadata()
  importerExporterCodeVerificationApi500ApplicationJsonObject?: ImporterExporterCodeVerificationApi500ApplicationJson;

  @SpeakeasyMetadata()
  importerExporterCodeVerificationApi502ApplicationJsonObject?: ImporterExporterCodeVerificationApi502ApplicationJson;

  @SpeakeasyMetadata()
  importerExporterCodeVerificationApi503ApplicationJsonObject?: ImporterExporterCodeVerificationApi503ApplicationJson;

  @SpeakeasyMetadata()
  importerExporterCodeVerificationApi504ApplicationJsonObject?: ImporterExporterCodeVerificationApi504ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
