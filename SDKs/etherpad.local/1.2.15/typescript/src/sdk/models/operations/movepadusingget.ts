import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MovePadUsingGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=destinationID" })
  destinationId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=force" })
  force?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sourceID" })
  sourceId?: string;
}


export class MovePadUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: MovePadUsingGetQueryParams;
}


export class MovePadUsingGet200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class MovePadUsingGet400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class MovePadUsingGet401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class MovePadUsingGet500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class MovePadUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  movePadUsingGet200ApplicationJsonObject?: MovePadUsingGet200ApplicationJson;

  @Metadata()
  movePadUsingGet400ApplicationJsonObject?: MovePadUsingGet400ApplicationJson;

  @Metadata()
  movePadUsingGet401ApplicationJsonObject?: MovePadUsingGet401ApplicationJson;

  @Metadata()
  movePadUsingGet500ApplicationJsonObject?: MovePadUsingGet500ApplicationJson;
}
