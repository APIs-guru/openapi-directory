import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PullDocumentIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class PullDocumentIdRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: any;

  @Metadata()
  security: PullDocumentIdSecurity;
}


export class PullDocumentId401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class PullDocumentId404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: any;

  @Metadata({ data: "json, name=error_description" })
  errorDescription?: any;
}


export class PullDocumentIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  pullDocumentId400ApplicationJsonOneOf?: any;

  @Metadata()
  pullDocumentId401ApplicationJsonObject?: PullDocumentId401ApplicationJson;

  @Metadata()
  pullDocumentId404ApplicationJsonObject?: PullDocumentId404ApplicationJson;

  @Metadata()
  pullDocumentId500ApplicationJsonOneOf?: any;

  @Metadata()
  sample?: any;

  @Metadata()
  statusCode: number;
}
