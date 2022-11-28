import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OptionsProxyHeaders extends SpeakeasyBase {
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


export class OptionsProxySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class OptionsProxy401ApplicationJson extends SpeakeasyBase {
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


export class OptionsProxyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: OptionsProxyHeaders;

  @SpeakeasyMetadata()
  security: OptionsProxySecurity;
}


export class OptionsProxyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  optionsProxy200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  optionsProxy401ApplicationJsonObject?: OptionsProxy401ApplicationJson;

  @SpeakeasyMetadata()
  optionsProxyDefaultApplicationJsonAny?: any;
}
