import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateAuthorUsingGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;
}


export class CreateAuthorUsingGet200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorID" })
  authorId?: string;
}


export class CreateAuthorUsingGet200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: CreateAuthorUsingGet200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreateAuthorUsingGet400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreateAuthorUsingGet401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreateAuthorUsingGet500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CreateAuthorUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CreateAuthorUsingGetQueryParams;
}


export class CreateAuthorUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createAuthorUsingGet200ApplicationJsonObject?: CreateAuthorUsingGet200ApplicationJson;

  @SpeakeasyMetadata()
  createAuthorUsingGet400ApplicationJsonObject?: CreateAuthorUsingGet400ApplicationJson;

  @SpeakeasyMetadata()
  createAuthorUsingGet401ApplicationJsonObject?: CreateAuthorUsingGet401ApplicationJson;

  @SpeakeasyMetadata()
  createAuthorUsingGet500ApplicationJsonObject?: CreateAuthorUsingGet500ApplicationJson;
}
