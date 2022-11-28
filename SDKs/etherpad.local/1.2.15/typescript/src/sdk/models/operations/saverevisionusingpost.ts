import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SaveRevisionUsingPostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rev" })
  rev?: string;
}


export class SaveRevisionUsingPost200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class SaveRevisionUsingPost400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class SaveRevisionUsingPost401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class SaveRevisionUsingPost500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class SaveRevisionUsingPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SaveRevisionUsingPostQueryParams;
}


export class SaveRevisionUsingPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  saveRevisionUsingPost200ApplicationJsonObject?: SaveRevisionUsingPost200ApplicationJson;

  @SpeakeasyMetadata()
  saveRevisionUsingPost400ApplicationJsonObject?: SaveRevisionUsingPost400ApplicationJson;

  @SpeakeasyMetadata()
  saveRevisionUsingPost401ApplicationJsonObject?: SaveRevisionUsingPost401ApplicationJson;

  @SpeakeasyMetadata()
  saveRevisionUsingPost500ApplicationJsonObject?: SaveRevisionUsingPost500ApplicationJson;
}
