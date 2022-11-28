import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListSavedRevisionsUsingGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;
}


export class ListSavedRevisionsUsingGet200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListSavedRevisionsUsingGet400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListSavedRevisionsUsingGet401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListSavedRevisionsUsingGet500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListSavedRevisionsUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListSavedRevisionsUsingGetQueryParams;
}


export class ListSavedRevisionsUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listSavedRevisionsUsingGet200ApplicationJsonObject?: ListSavedRevisionsUsingGet200ApplicationJson;

  @SpeakeasyMetadata()
  listSavedRevisionsUsingGet400ApplicationJsonObject?: ListSavedRevisionsUsingGet400ApplicationJson;

  @SpeakeasyMetadata()
  listSavedRevisionsUsingGet401ApplicationJsonObject?: ListSavedRevisionsUsingGet401ApplicationJson;

  @SpeakeasyMetadata()
  listSavedRevisionsUsingGet500ApplicationJsonObject?: ListSavedRevisionsUsingGet500ApplicationJson;
}
