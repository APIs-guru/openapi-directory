import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateDiffHtmlUsingGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=endRev" })
  endRev?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startRev" })
  startRev?: string;
}


export class CreateDiffHtmlUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: CreateDiffHtmlUsingGetQueryParams;
}


export class CreateDiffHtmlUsingGet200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CreateDiffHtmlUsingGet400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CreateDiffHtmlUsingGet401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CreateDiffHtmlUsingGet500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CreateDiffHtmlUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createDiffHtmlUsingGet200ApplicationJsonObject?: CreateDiffHtmlUsingGet200ApplicationJson;

  @Metadata()
  createDiffHtmlUsingGet400ApplicationJsonObject?: CreateDiffHtmlUsingGet400ApplicationJson;

  @Metadata()
  createDiffHtmlUsingGet401ApplicationJsonObject?: CreateDiffHtmlUsingGet401ApplicationJson;

  @Metadata()
  createDiffHtmlUsingGet500ApplicationJsonObject?: CreateDiffHtmlUsingGet500ApplicationJson;
}
