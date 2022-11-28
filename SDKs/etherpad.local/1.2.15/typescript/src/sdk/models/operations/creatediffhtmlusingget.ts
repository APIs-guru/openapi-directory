import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateDiffHtmlUsingGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=endRev" })
  endRev?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=startRev" })
  startRev?: string;
}


export class CreateDiffHtmlUsingGet200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreateDiffHtmlUsingGet400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreateDiffHtmlUsingGet401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreateDiffHtmlUsingGet500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreateDiffHtmlUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CreateDiffHtmlUsingGetQueryParams;
}


export class CreateDiffHtmlUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createDiffHtmlUsingGet200ApplicationJsonObject?: CreateDiffHtmlUsingGet200ApplicationJson;

  @SpeakeasyMetadata()
  createDiffHtmlUsingGet400ApplicationJsonObject?: CreateDiffHtmlUsingGet400ApplicationJson;

  @SpeakeasyMetadata()
  createDiffHtmlUsingGet401ApplicationJsonObject?: CreateDiffHtmlUsingGet401ApplicationJson;

  @SpeakeasyMetadata()
  createDiffHtmlUsingGet500ApplicationJsonObject?: CreateDiffHtmlUsingGet500ApplicationJson;
}
