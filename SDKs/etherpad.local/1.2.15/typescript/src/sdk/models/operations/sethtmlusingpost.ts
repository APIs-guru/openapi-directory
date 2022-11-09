import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SetHtmlUsingPostQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=html" })
  html?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;
}


export class SetHtmlUsingPostRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SetHtmlUsingPostQueryParams;
}


export class SetHtmlUsingPost200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class SetHtmlUsingPost400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class SetHtmlUsingPost401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class SetHtmlUsingPost500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class SetHtmlUsingPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  setHtmlUsingPost200ApplicationJsonObject?: SetHtmlUsingPost200ApplicationJson;

  @Metadata()
  setHtmlUsingPost400ApplicationJsonObject?: SetHtmlUsingPost400ApplicationJson;

  @Metadata()
  setHtmlUsingPost401ApplicationJsonObject?: SetHtmlUsingPost401ApplicationJson;

  @Metadata()
  setHtmlUsingPost500ApplicationJsonObject?: SetHtmlUsingPost500ApplicationJson;
}
