import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SetHtmlUsingGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=html" })
  html?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;
}


export class SetHtmlUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SetHtmlUsingGetQueryParams;
}


export class SetHtmlUsingGet200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class SetHtmlUsingGet400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class SetHtmlUsingGet401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class SetHtmlUsingGet500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class SetHtmlUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  setHtmlUsingGet200ApplicationJsonObject?: SetHtmlUsingGet200ApplicationJson;

  @Metadata()
  setHtmlUsingGet400ApplicationJsonObject?: SetHtmlUsingGet400ApplicationJson;

  @Metadata()
  setHtmlUsingGet401ApplicationJsonObject?: SetHtmlUsingGet401ApplicationJson;

  @Metadata()
  setHtmlUsingGet500ApplicationJsonObject?: SetHtmlUsingGet500ApplicationJson;
}
