import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SaveRevisionUsingGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rev" })
  rev?: string;
}


export class SaveRevisionUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SaveRevisionUsingGetQueryParams;
}


export class SaveRevisionUsingGet200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class SaveRevisionUsingGet400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class SaveRevisionUsingGet401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class SaveRevisionUsingGet500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class SaveRevisionUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  saveRevisionUsingGet200ApplicationJsonObject?: SaveRevisionUsingGet200ApplicationJson;

  @Metadata()
  saveRevisionUsingGet400ApplicationJsonObject?: SaveRevisionUsingGet400ApplicationJson;

  @Metadata()
  saveRevisionUsingGet401ApplicationJsonObject?: SaveRevisionUsingGet401ApplicationJson;

  @Metadata()
  saveRevisionUsingGet500ApplicationJsonObject?: SaveRevisionUsingGet500ApplicationJson;
}
