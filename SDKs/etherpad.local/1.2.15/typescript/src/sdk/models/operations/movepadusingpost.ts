import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MovePadUsingPostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=destinationID" })
  destinationId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=force" })
  force?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sourceID" })
  sourceId?: string;
}


export class MovePadUsingPost200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class MovePadUsingPost400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class MovePadUsingPost401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class MovePadUsingPost500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class MovePadUsingPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: MovePadUsingPostQueryParams;
}


export class MovePadUsingPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  movePadUsingPost200ApplicationJsonObject?: MovePadUsingPost200ApplicationJson;

  @SpeakeasyMetadata()
  movePadUsingPost400ApplicationJsonObject?: MovePadUsingPost400ApplicationJson;

  @SpeakeasyMetadata()
  movePadUsingPost401ApplicationJsonObject?: MovePadUsingPost401ApplicationJson;

  @SpeakeasyMetadata()
  movePadUsingPost500ApplicationJsonObject?: MovePadUsingPost500ApplicationJson;
}
