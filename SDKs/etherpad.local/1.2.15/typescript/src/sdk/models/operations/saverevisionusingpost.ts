import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SaveRevisionUsingPostQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rev" })
  rev?: string;
}


export class SaveRevisionUsingPostRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SaveRevisionUsingPostQueryParams;
}


export class SaveRevisionUsingPost200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class SaveRevisionUsingPost400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class SaveRevisionUsingPost401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class SaveRevisionUsingPost500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class SaveRevisionUsingPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  saveRevisionUsingPost200ApplicationJsonObject?: SaveRevisionUsingPost200ApplicationJson;

  @Metadata()
  saveRevisionUsingPost400ApplicationJsonObject?: SaveRevisionUsingPost400ApplicationJson;

  @Metadata()
  saveRevisionUsingPost401ApplicationJsonObject?: SaveRevisionUsingPost401ApplicationJson;

  @Metadata()
  saveRevisionUsingPost500ApplicationJsonObject?: SaveRevisionUsingPost500ApplicationJson;
}
