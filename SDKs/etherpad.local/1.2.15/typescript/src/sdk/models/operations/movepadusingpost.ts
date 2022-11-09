import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MovePadUsingPostQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=destinationID" })
  destinationId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=force" })
  force?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sourceID" })
  sourceId?: string;
}


export class MovePadUsingPostRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: MovePadUsingPostQueryParams;
}


export class MovePadUsingPost200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class MovePadUsingPost400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class MovePadUsingPost401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class MovePadUsingPost500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class MovePadUsingPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  movePadUsingPost200ApplicationJsonObject?: MovePadUsingPost200ApplicationJson;

  @Metadata()
  movePadUsingPost400ApplicationJsonObject?: MovePadUsingPost400ApplicationJson;

  @Metadata()
  movePadUsingPost401ApplicationJsonObject?: MovePadUsingPost401ApplicationJson;

  @Metadata()
  movePadUsingPost500ApplicationJsonObject?: MovePadUsingPost500ApplicationJson;
}
