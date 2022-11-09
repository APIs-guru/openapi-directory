import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListSavedRevisionsUsingPostQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;
}


export class ListSavedRevisionsUsingPostRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListSavedRevisionsUsingPostQueryParams;
}


export class ListSavedRevisionsUsingPost200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ListSavedRevisionsUsingPost400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ListSavedRevisionsUsingPost401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ListSavedRevisionsUsingPost500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ListSavedRevisionsUsingPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  listSavedRevisionsUsingPost200ApplicationJsonObject?: ListSavedRevisionsUsingPost200ApplicationJson;

  @Metadata()
  listSavedRevisionsUsingPost400ApplicationJsonObject?: ListSavedRevisionsUsingPost400ApplicationJson;

  @Metadata()
  listSavedRevisionsUsingPost401ApplicationJsonObject?: ListSavedRevisionsUsingPost401ApplicationJson;

  @Metadata()
  listSavedRevisionsUsingPost500ApplicationJsonObject?: ListSavedRevisionsUsingPost500ApplicationJson;
}
