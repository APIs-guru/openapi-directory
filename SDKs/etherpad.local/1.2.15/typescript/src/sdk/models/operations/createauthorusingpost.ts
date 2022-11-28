import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateAuthorUsingPostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;
}


export class CreateAuthorUsingPost200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorID" })
  authorId?: string;
}


export class CreateAuthorUsingPost200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: CreateAuthorUsingPost200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreateAuthorUsingPost400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreateAuthorUsingPost401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreateAuthorUsingPost500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreateAuthorUsingPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CreateAuthorUsingPostQueryParams;
}


export class CreateAuthorUsingPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createAuthorUsingPost200ApplicationJsonObject?: CreateAuthorUsingPost200ApplicationJson;

  @SpeakeasyMetadata()
  createAuthorUsingPost400ApplicationJsonObject?: CreateAuthorUsingPost400ApplicationJson;

  @SpeakeasyMetadata()
  createAuthorUsingPost401ApplicationJsonObject?: CreateAuthorUsingPost401ApplicationJson;

  @SpeakeasyMetadata()
  createAuthorUsingPost500ApplicationJsonObject?: CreateAuthorUsingPost500ApplicationJson;
}
