import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTextUsingPostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rev" })
  rev?: string;
}


export class GetTextUsingPost200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}


export class GetTextUsingPost200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: GetTextUsingPost200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetTextUsingPost400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetTextUsingPost401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetTextUsingPost500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetTextUsingPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetTextUsingPostQueryParams;
}


export class GetTextUsingPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTextUsingPost200ApplicationJsonObject?: GetTextUsingPost200ApplicationJson;

  @SpeakeasyMetadata()
  getTextUsingPost400ApplicationJsonObject?: GetTextUsingPost400ApplicationJson;

  @SpeakeasyMetadata()
  getTextUsingPost401ApplicationJsonObject?: GetTextUsingPost401ApplicationJson;

  @SpeakeasyMetadata()
  getTextUsingPost500ApplicationJsonObject?: GetTextUsingPost500ApplicationJson;
}
