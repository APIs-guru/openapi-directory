import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteProxyHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" })
  xApideckAppId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" })
  xApideckConsumerId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-apideck-downstream-authorization" })
  xApideckDownstreamAuthorization?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-apideck-downstream-url" })
  xApideckDownstreamUrl: string;

  @Metadata({ data: "header, style=simple;explode=false;name=x-apideck-service-id" })
  xApideckServiceId: string;
}


export class DeleteProxySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class DeleteProxyRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteProxyHeaders;

  @Metadata()
  security: DeleteProxySecurity;
}


export class DeleteProxy401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=detail" })
  detail?: string;

  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=ref" })
  ref?: string;

  @Metadata({ data: "json, name=status_code" })
  statusCode?: number;

  @Metadata({ data: "json, name=type_name" })
  typeName?: string;
}


export class DeleteProxyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  deleteProxy200ApplicationJsonAny?: any;

  @Metadata()
  deleteProxy401ApplicationJsonObject?: DeleteProxy401ApplicationJson;

  @Metadata()
  deleteProxyDefaultApplicationJsonAny?: any;
}
