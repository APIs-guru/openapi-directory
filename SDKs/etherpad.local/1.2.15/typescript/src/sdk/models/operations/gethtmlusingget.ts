import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetHtmlUsingGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rev" })
  rev?: string;
}


export class GetHtmlUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetHtmlUsingGetQueryParams;
}


export class GetHtmlUsingGet200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=html" })
  html?: string;
}


export class GetHtmlUsingGet200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: GetHtmlUsingGet200ApplicationJsonData;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetHtmlUsingGet400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetHtmlUsingGet401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetHtmlUsingGet500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetHtmlUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getHtmlUsingGet200ApplicationJsonObject?: GetHtmlUsingGet200ApplicationJson;

  @Metadata()
  getHtmlUsingGet400ApplicationJsonObject?: GetHtmlUsingGet400ApplicationJson;

  @Metadata()
  getHtmlUsingGet401ApplicationJsonObject?: GetHtmlUsingGet401ApplicationJson;

  @Metadata()
  getHtmlUsingGet500ApplicationJsonObject?: GetHtmlUsingGet500ApplicationJson;
}
