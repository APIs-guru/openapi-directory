import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListSessionsOfAuthorUsingPostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authorID" })
  authorId?: string;
}


export class ListSessionsOfAuthorUsingPost200ApplicationJsonDataSessions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorID" })
  authorId?: string;

  @SpeakeasyMetadata({ data: "json, name=groupID" })
  groupId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=validUntil" })
  validUntil?: number;
}


export class ListSessionsOfAuthorUsingPost200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sessions", elemType: ListSessionsOfAuthorUsingPost200ApplicationJsonDataSessions })
  sessions?: ListSessionsOfAuthorUsingPost200ApplicationJsonDataSessions[];
}


export class ListSessionsOfAuthorUsingPost200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: ListSessionsOfAuthorUsingPost200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListSessionsOfAuthorUsingPost400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListSessionsOfAuthorUsingPost401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListSessionsOfAuthorUsingPost500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListSessionsOfAuthorUsingPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListSessionsOfAuthorUsingPostQueryParams;
}


export class ListSessionsOfAuthorUsingPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listSessionsOfAuthorUsingPost200ApplicationJsonObject?: ListSessionsOfAuthorUsingPost200ApplicationJson;

  @SpeakeasyMetadata()
  listSessionsOfAuthorUsingPost400ApplicationJsonObject?: ListSessionsOfAuthorUsingPost400ApplicationJson;

  @SpeakeasyMetadata()
  listSessionsOfAuthorUsingPost401ApplicationJsonObject?: ListSessionsOfAuthorUsingPost401ApplicationJson;

  @SpeakeasyMetadata()
  listSessionsOfAuthorUsingPost500ApplicationJsonObject?: ListSessionsOfAuthorUsingPost500ApplicationJson;
}
