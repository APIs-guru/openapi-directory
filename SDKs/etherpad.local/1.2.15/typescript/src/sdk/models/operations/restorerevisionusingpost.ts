import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RestoreRevisionUsingPostQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rev" })
  rev?: string;
}


export class RestoreRevisionUsingPostRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: RestoreRevisionUsingPostQueryParams;
}


export class RestoreRevisionUsingPost200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class RestoreRevisionUsingPost400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class RestoreRevisionUsingPost401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class RestoreRevisionUsingPost500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class RestoreRevisionUsingPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  restoreRevisionUsingPost200ApplicationJsonObject?: RestoreRevisionUsingPost200ApplicationJson;

  @Metadata()
  restoreRevisionUsingPost400ApplicationJsonObject?: RestoreRevisionUsingPost400ApplicationJson;

  @Metadata()
  restoreRevisionUsingPost401ApplicationJsonObject?: RestoreRevisionUsingPost401ApplicationJson;

  @Metadata()
  restoreRevisionUsingPost500ApplicationJsonObject?: RestoreRevisionUsingPost500ApplicationJson;
}
