import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateAuthorUsingGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;
}


export class CreateAuthorUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: CreateAuthorUsingGetQueryParams;
}


export class CreateAuthorUsingGet200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorID" })
  authorId?: string;
}


export class CreateAuthorUsingGet200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: CreateAuthorUsingGet200ApplicationJsonData;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CreateAuthorUsingGet400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CreateAuthorUsingGet401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CreateAuthorUsingGet500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CreateAuthorUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createAuthorUsingGet200ApplicationJsonObject?: CreateAuthorUsingGet200ApplicationJson;

  @Metadata()
  createAuthorUsingGet400ApplicationJsonObject?: CreateAuthorUsingGet400ApplicationJson;

  @Metadata()
  createAuthorUsingGet401ApplicationJsonObject?: CreateAuthorUsingGet401ApplicationJson;

  @Metadata()
  createAuthorUsingGet500ApplicationJsonObject?: CreateAuthorUsingGet500ApplicationJson;
}
