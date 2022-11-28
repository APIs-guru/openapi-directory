import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateDiffHtmlUsingPostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endRev" })
  endRev?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startRev" })
  startRev?: string;
}


export class CreateDiffHtmlUsingPost200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreateDiffHtmlUsingPost400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreateDiffHtmlUsingPost401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreateDiffHtmlUsingPost500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreateDiffHtmlUsingPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CreateDiffHtmlUsingPostQueryParams;
}


export class CreateDiffHtmlUsingPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createDiffHtmlUsingPost200ApplicationJsonObject?: CreateDiffHtmlUsingPost200ApplicationJson;

  @SpeakeasyMetadata()
  createDiffHtmlUsingPost400ApplicationJsonObject?: CreateDiffHtmlUsingPost400ApplicationJson;

  @SpeakeasyMetadata()
  createDiffHtmlUsingPost401ApplicationJsonObject?: CreateDiffHtmlUsingPost401ApplicationJson;

  @SpeakeasyMetadata()
  createDiffHtmlUsingPost500ApplicationJsonObject?: CreateDiffHtmlUsingPost500ApplicationJson;
}
