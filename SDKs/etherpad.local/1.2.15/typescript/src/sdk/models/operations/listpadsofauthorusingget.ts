import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListPadsOfAuthorUsingGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authorID" })
  authorId?: string;
}


export class ListPadsOfAuthorUsingGet200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=padIDs" })
  padIDs?: string[];
}


export class ListPadsOfAuthorUsingGet200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: ListPadsOfAuthorUsingGet200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListPadsOfAuthorUsingGet400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListPadsOfAuthorUsingGet401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListPadsOfAuthorUsingGet500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListPadsOfAuthorUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListPadsOfAuthorUsingGetQueryParams;
}


export class ListPadsOfAuthorUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listPadsOfAuthorUsingGet200ApplicationJsonObject?: ListPadsOfAuthorUsingGet200ApplicationJson;

  @SpeakeasyMetadata()
  listPadsOfAuthorUsingGet400ApplicationJsonObject?: ListPadsOfAuthorUsingGet400ApplicationJson;

  @SpeakeasyMetadata()
  listPadsOfAuthorUsingGet401ApplicationJsonObject?: ListPadsOfAuthorUsingGet401ApplicationJson;

  @SpeakeasyMetadata()
  listPadsOfAuthorUsingGet500ApplicationJsonObject?: ListPadsOfAuthorUsingGet500ApplicationJson;
}
