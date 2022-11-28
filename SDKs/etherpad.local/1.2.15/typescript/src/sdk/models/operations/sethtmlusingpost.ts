import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SetHtmlUsingPostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=html" })
  html?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;
}


export class SetHtmlUsingPost200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class SetHtmlUsingPost400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class SetHtmlUsingPost401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class SetHtmlUsingPost500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class SetHtmlUsingPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SetHtmlUsingPostQueryParams;
}


export class SetHtmlUsingPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  setHtmlUsingPost200ApplicationJsonObject?: SetHtmlUsingPost200ApplicationJson;

  @SpeakeasyMetadata()
  setHtmlUsingPost400ApplicationJsonObject?: SetHtmlUsingPost400ApplicationJson;

  @SpeakeasyMetadata()
  setHtmlUsingPost401ApplicationJsonObject?: SetHtmlUsingPost401ApplicationJson;

  @SpeakeasyMetadata()
  setHtmlUsingPost500ApplicationJsonObject?: SetHtmlUsingPost500ApplicationJson;
}
