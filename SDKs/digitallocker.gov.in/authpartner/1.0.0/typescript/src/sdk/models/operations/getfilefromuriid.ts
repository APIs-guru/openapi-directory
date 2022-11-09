import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetFileFromUriIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=uri" })
  uri: string;
}


export class GetFileFromUriIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetFileFromUriIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetFileFromUriIdPathParams;

  @Metadata()
  security: GetFileFromUriIdSecurity;
}


export class GetFileFromUriId400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class GetFileFromUriId401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class GetFileFromUriId404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class GetFileFromUriIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getFileFromUriId200ApplicationPdfString?: string;

  @Metadata()
  getFileFromUriId200ImageJpegString?: string;

  @Metadata()
  getFileFromUriId200ImageJpgString?: string;

  @Metadata()
  getFileFromUriId200ImagePngString?: string;

  @Metadata()
  getFileFromUriId400ApplicationJsonObject?: GetFileFromUriId400ApplicationJson;

  @Metadata()
  getFileFromUriId401ApplicationJsonObject?: GetFileFromUriId401ApplicationJson;

  @Metadata()
  getFileFromUriId404ApplicationJsonObject?: GetFileFromUriId404ApplicationJson;

  @Metadata()
  getFileFromUriId500ApplicationJsonOneOf?: any;

  @Metadata()
  getFileFromUriId503ApplicationJsonOneOf?: any;

  @Metadata()
  statusCode: number;
}
