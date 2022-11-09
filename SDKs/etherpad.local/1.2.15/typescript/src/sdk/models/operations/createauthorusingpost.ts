import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateAuthorUsingPostQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;
}


export class CreateAuthorUsingPostRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: CreateAuthorUsingPostQueryParams;
}


export class CreateAuthorUsingPost200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorID" })
  authorId?: string;
}


export class CreateAuthorUsingPost200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: CreateAuthorUsingPost200ApplicationJsonData;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CreateAuthorUsingPost400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CreateAuthorUsingPost401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CreateAuthorUsingPost500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CreateAuthorUsingPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createAuthorUsingPost200ApplicationJsonObject?: CreateAuthorUsingPost200ApplicationJson;

  @Metadata()
  createAuthorUsingPost400ApplicationJsonObject?: CreateAuthorUsingPost400ApplicationJson;

  @Metadata()
  createAuthorUsingPost401ApplicationJsonObject?: CreateAuthorUsingPost401ApplicationJson;

  @Metadata()
  createAuthorUsingPost500ApplicationJsonObject?: CreateAuthorUsingPost500ApplicationJson;
}
