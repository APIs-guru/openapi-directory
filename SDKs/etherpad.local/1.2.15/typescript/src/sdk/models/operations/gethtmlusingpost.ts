import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetHtmlUsingPostQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rev" })
  rev?: string;
}


export class GetHtmlUsingPostRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetHtmlUsingPostQueryParams;
}


export class GetHtmlUsingPost200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=html" })
  html?: string;
}


export class GetHtmlUsingPost200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: GetHtmlUsingPost200ApplicationJsonData;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetHtmlUsingPost400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetHtmlUsingPost401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetHtmlUsingPost500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetHtmlUsingPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getHtmlUsingPost200ApplicationJsonObject?: GetHtmlUsingPost200ApplicationJson;

  @Metadata()
  getHtmlUsingPost400ApplicationJsonObject?: GetHtmlUsingPost400ApplicationJson;

  @Metadata()
  getHtmlUsingPost401ApplicationJsonObject?: GetHtmlUsingPost401ApplicationJson;

  @Metadata()
  getHtmlUsingPost500ApplicationJsonObject?: GetHtmlUsingPost500ApplicationJson;
}
