import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateAuthorIfNotExistsForUsingPostQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authorMapper" })
  authorMapper?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;
}


export class CreateAuthorIfNotExistsForUsingPostRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: CreateAuthorIfNotExistsForUsingPostQueryParams;
}


export class CreateAuthorIfNotExistsForUsingPost200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorID" })
  authorId?: string;
}


export class CreateAuthorIfNotExistsForUsingPost200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: CreateAuthorIfNotExistsForUsingPost200ApplicationJsonData;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CreateAuthorIfNotExistsForUsingPost400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CreateAuthorIfNotExistsForUsingPost401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CreateAuthorIfNotExistsForUsingPost500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CreateAuthorIfNotExistsForUsingPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createAuthorIfNotExistsForUsingPost200ApplicationJsonObject?: CreateAuthorIfNotExistsForUsingPost200ApplicationJson;

  @Metadata()
  createAuthorIfNotExistsForUsingPost400ApplicationJsonObject?: CreateAuthorIfNotExistsForUsingPost400ApplicationJson;

  @Metadata()
  createAuthorIfNotExistsForUsingPost401ApplicationJsonObject?: CreateAuthorIfNotExistsForUsingPost401ApplicationJson;

  @Metadata()
  createAuthorIfNotExistsForUsingPost500ApplicationJsonObject?: CreateAuthorIfNotExistsForUsingPost500ApplicationJson;
}
