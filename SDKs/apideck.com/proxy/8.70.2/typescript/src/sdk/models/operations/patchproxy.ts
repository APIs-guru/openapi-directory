import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatchProxyHeaders extends SpeakeasyBase {
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


export class PatchProxySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class PatchProxyRequest extends SpeakeasyBase {
  @Metadata()
  headers: PatchProxyHeaders;

  @Metadata({ data: "request, media_type=*/*" })
  request?: Uint8Array;

  @Metadata()
  security: PatchProxySecurity;
}


export class PatchProxy401ApplicationJson extends SpeakeasyBase {
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


export class PatchProxyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  patchProxy200ApplicationJsonAny?: any;

  @Metadata()
  patchProxy401ApplicationJsonObject?: PatchProxy401ApplicationJson;

  @Metadata()
  patchProxyDefaultApplicationJsonAny?: any;
}
