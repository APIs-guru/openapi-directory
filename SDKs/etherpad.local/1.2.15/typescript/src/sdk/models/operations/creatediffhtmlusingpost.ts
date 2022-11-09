import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateDiffHtmlUsingPostQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=endRev" })
  endRev?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=startRev" })
  startRev?: string;
}


export class CreateDiffHtmlUsingPostRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: CreateDiffHtmlUsingPostQueryParams;
}


export class CreateDiffHtmlUsingPost200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CreateDiffHtmlUsingPost400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CreateDiffHtmlUsingPost401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CreateDiffHtmlUsingPost500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CreateDiffHtmlUsingPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createDiffHtmlUsingPost200ApplicationJsonObject?: CreateDiffHtmlUsingPost200ApplicationJson;

  @Metadata()
  createDiffHtmlUsingPost400ApplicationJsonObject?: CreateDiffHtmlUsingPost400ApplicationJson;

  @Metadata()
  createDiffHtmlUsingPost401ApplicationJsonObject?: CreateDiffHtmlUsingPost401ApplicationJson;

  @Metadata()
  createDiffHtmlUsingPost500ApplicationJsonObject?: CreateDiffHtmlUsingPost500ApplicationJson;
}
