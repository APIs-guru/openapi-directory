import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListSavedRevisionsUsingPostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;
}


export class ListSavedRevisionsUsingPost200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListSavedRevisionsUsingPost400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListSavedRevisionsUsingPost401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListSavedRevisionsUsingPost500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListSavedRevisionsUsingPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListSavedRevisionsUsingPostQueryParams;
}


export class ListSavedRevisionsUsingPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listSavedRevisionsUsingPost200ApplicationJsonObject?: ListSavedRevisionsUsingPost200ApplicationJson;

  @SpeakeasyMetadata()
  listSavedRevisionsUsingPost400ApplicationJsonObject?: ListSavedRevisionsUsingPost400ApplicationJson;

  @SpeakeasyMetadata()
  listSavedRevisionsUsingPost401ApplicationJsonObject?: ListSavedRevisionsUsingPost401ApplicationJson;

  @SpeakeasyMetadata()
  listSavedRevisionsUsingPost500ApplicationJsonObject?: ListSavedRevisionsUsingPost500ApplicationJson;
}
