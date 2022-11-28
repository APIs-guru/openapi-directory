import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteProxyHeaders extends SpeakeasyBase {
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


export class DeleteProxySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class DeleteProxy401ApplicationJson extends SpeakeasyBase {
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


export class DeleteProxyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: DeleteProxyHeaders;

  @SpeakeasyMetadata()
  security: DeleteProxySecurity;
}


export class DeleteProxyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteProxy200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  deleteProxy401ApplicationJsonObject?: DeleteProxy401ApplicationJson;

  @SpeakeasyMetadata()
  deleteProxyDefaultApplicationJsonAny?: any;
}
