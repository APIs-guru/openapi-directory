import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchProxyHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-app-id" })
  xApideckAppId: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-consumer-id" })
  xApideckConsumerId: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-downstream-authorization" })
  xApideckDownstreamAuthorization?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-downstream-url" })
  xApideckDownstreamUrl: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=x-apideck-service-id" })
  xApideckServiceId: string;
}


export class PatchProxySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class PatchProxy401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=ref" })
  ref?: string;

  @SpeakeasyMetadata({ data: "json, name=status_code" })
  statusCode?: number;

  @SpeakeasyMetadata({ data: "json, name=type_name" })
  typeName?: string;
}


export class PatchProxyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PatchProxyHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=*/*" })
  request?: Uint8Array;

  @SpeakeasyMetadata()
  security: PatchProxySecurity;
}


export class PatchProxyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  patchProxy200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  patchProxy401ApplicationJsonObject?: PatchProxy401ApplicationJson;

  @SpeakeasyMetadata()
  patchProxyDefaultApplicationJsonAny?: any;
}
