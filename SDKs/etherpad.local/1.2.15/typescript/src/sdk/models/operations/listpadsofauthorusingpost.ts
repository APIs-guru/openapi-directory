import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListPadsOfAuthorUsingPostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authorID" })
  authorId?: string;
}


export class ListPadsOfAuthorUsingPost200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=padIDs" })
  padIDs?: string[];
}


export class ListPadsOfAuthorUsingPost200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: ListPadsOfAuthorUsingPost200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListPadsOfAuthorUsingPost400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListPadsOfAuthorUsingPost401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListPadsOfAuthorUsingPost500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListPadsOfAuthorUsingPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListPadsOfAuthorUsingPostQueryParams;
}


export class ListPadsOfAuthorUsingPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listPadsOfAuthorUsingPost200ApplicationJsonObject?: ListPadsOfAuthorUsingPost200ApplicationJson;

  @SpeakeasyMetadata()
  listPadsOfAuthorUsingPost400ApplicationJsonObject?: ListPadsOfAuthorUsingPost400ApplicationJson;

  @SpeakeasyMetadata()
  listPadsOfAuthorUsingPost401ApplicationJsonObject?: ListPadsOfAuthorUsingPost401ApplicationJson;

  @SpeakeasyMetadata()
  listPadsOfAuthorUsingPost500ApplicationJsonObject?: ListPadsOfAuthorUsingPost500ApplicationJson;
}
