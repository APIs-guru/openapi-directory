import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetTextUsingGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rev" })
  rev?: string;
}


export class GetTextUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetTextUsingGetQueryParams;
}


export class GetTextUsingGet200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=text" })
  text?: string;
}


export class GetTextUsingGet200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: GetTextUsingGet200ApplicationJsonData;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetTextUsingGet400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetTextUsingGet401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetTextUsingGet500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetTextUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getTextUsingGet200ApplicationJsonObject?: GetTextUsingGet200ApplicationJson;

  @Metadata()
  getTextUsingGet400ApplicationJsonObject?: GetTextUsingGet400ApplicationJson;

  @Metadata()
  getTextUsingGet401ApplicationJsonObject?: GetTextUsingGet401ApplicationJson;

  @Metadata()
  getTextUsingGet500ApplicationJsonObject?: GetTextUsingGet500ApplicationJson;
}
