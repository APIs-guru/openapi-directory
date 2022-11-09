import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateAuthorIfNotExistsForUsingGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authorMapper" })
  authorMapper?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;
}


export class CreateAuthorIfNotExistsForUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: CreateAuthorIfNotExistsForUsingGetQueryParams;
}


export class CreateAuthorIfNotExistsForUsingGet200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorID" })
  authorId?: string;
}


export class CreateAuthorIfNotExistsForUsingGet200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: CreateAuthorIfNotExistsForUsingGet200ApplicationJsonData;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CreateAuthorIfNotExistsForUsingGet400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CreateAuthorIfNotExistsForUsingGet401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CreateAuthorIfNotExistsForUsingGet500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CreateAuthorIfNotExistsForUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createAuthorIfNotExistsForUsingGet200ApplicationJsonObject?: CreateAuthorIfNotExistsForUsingGet200ApplicationJson;

  @Metadata()
  createAuthorIfNotExistsForUsingGet400ApplicationJsonObject?: CreateAuthorIfNotExistsForUsingGet400ApplicationJson;

  @Metadata()
  createAuthorIfNotExistsForUsingGet401ApplicationJsonObject?: CreateAuthorIfNotExistsForUsingGet401ApplicationJson;

  @Metadata()
  createAuthorIfNotExistsForUsingGet500ApplicationJsonObject?: CreateAuthorIfNotExistsForUsingGet500ApplicationJson;
}
