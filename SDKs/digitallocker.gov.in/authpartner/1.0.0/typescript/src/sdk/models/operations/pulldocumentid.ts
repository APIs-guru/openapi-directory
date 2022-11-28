import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PullDocumentIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class PullDocumentId401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class PullDocumentId404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: any;

  @SpeakeasyMetadata({ data: "json, name=error_description" })
  errorDescription?: any;
}


export class PullDocumentIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: any;

  @SpeakeasyMetadata()
  security: PullDocumentIdSecurity;
}


export class PullDocumentIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pullDocumentId400ApplicationJsonOneOf?: any;

  @SpeakeasyMetadata()
  pullDocumentId401ApplicationJsonObject?: PullDocumentId401ApplicationJson;

  @SpeakeasyMetadata()
  pullDocumentId404ApplicationJsonObject?: PullDocumentId404ApplicationJson;

  @SpeakeasyMetadata()
  pullDocumentId500ApplicationJsonOneOf?: any;

  @SpeakeasyMetadata()
  sample?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
