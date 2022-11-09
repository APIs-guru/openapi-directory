import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListSavedRevisionsUsingGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;
}


export class ListSavedRevisionsUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListSavedRevisionsUsingGetQueryParams;
}


export class ListSavedRevisionsUsingGet200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ListSavedRevisionsUsingGet400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ListSavedRevisionsUsingGet401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ListSavedRevisionsUsingGet500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ListSavedRevisionsUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  listSavedRevisionsUsingGet200ApplicationJsonObject?: ListSavedRevisionsUsingGet200ApplicationJson;

  @Metadata()
  listSavedRevisionsUsingGet400ApplicationJsonObject?: ListSavedRevisionsUsingGet400ApplicationJson;

  @Metadata()
  listSavedRevisionsUsingGet401ApplicationJsonObject?: ListSavedRevisionsUsingGet401ApplicationJson;

  @Metadata()
  listSavedRevisionsUsingGet500ApplicationJsonObject?: ListSavedRevisionsUsingGet500ApplicationJson;
}
