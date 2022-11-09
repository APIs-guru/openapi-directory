import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RestoreRevisionUsingGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rev" })
  rev?: string;
}


export class RestoreRevisionUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: RestoreRevisionUsingGetQueryParams;
}


export class RestoreRevisionUsingGet200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class RestoreRevisionUsingGet400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class RestoreRevisionUsingGet401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class RestoreRevisionUsingGet500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class RestoreRevisionUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  restoreRevisionUsingGet200ApplicationJsonObject?: RestoreRevisionUsingGet200ApplicationJson;

  @Metadata()
  restoreRevisionUsingGet400ApplicationJsonObject?: RestoreRevisionUsingGet400ApplicationJson;

  @Metadata()
  restoreRevisionUsingGet401ApplicationJsonObject?: RestoreRevisionUsingGet401ApplicationJson;

  @Metadata()
  restoreRevisionUsingGet500ApplicationJsonObject?: RestoreRevisionUsingGet500ApplicationJson;
}
