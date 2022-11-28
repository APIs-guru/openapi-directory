import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetFileFromUriIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=uri" })
  uri: string;
}


export class GetFileFromUriIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetFileFromUriId400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class GetFileFromUriId401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class GetFileFromUriId404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class GetFileFromUriIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetFileFromUriIdPathParams;

  @SpeakeasyMetadata()
  security: GetFileFromUriIdSecurity;
}


export class GetFileFromUriIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getFileFromUriId200ApplicationPdfString?: string;

  @SpeakeasyMetadata()
  getFileFromUriId200ImageJpegString?: string;

  @SpeakeasyMetadata()
  getFileFromUriId200ImageJpgString?: string;

  @SpeakeasyMetadata()
  getFileFromUriId200ImagePngString?: string;

  @SpeakeasyMetadata()
  getFileFromUriId400ApplicationJsonObject?: GetFileFromUriId400ApplicationJson;

  @SpeakeasyMetadata()
  getFileFromUriId401ApplicationJsonObject?: GetFileFromUriId401ApplicationJson;

  @SpeakeasyMetadata()
  getFileFromUriId404ApplicationJsonObject?: GetFileFromUriId404ApplicationJson;

  @SpeakeasyMetadata()
  getFileFromUriId500ApplicationJsonOneOf?: any;

  @SpeakeasyMetadata()
  getFileFromUriId503ApplicationJsonOneOf?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
