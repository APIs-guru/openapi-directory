import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListSessionsOfGroupUsingPostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupID" })
  groupId?: string;
}


export class ListSessionsOfGroupUsingPost200ApplicationJsonDataSessions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorID" })
  authorId?: string;

  @SpeakeasyMetadata({ data: "json, name=groupID" })
  groupId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=validUntil" })
  validUntil?: number;
}


export class ListSessionsOfGroupUsingPost200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sessions", elemType: ListSessionsOfGroupUsingPost200ApplicationJsonDataSessions })
  sessions?: ListSessionsOfGroupUsingPost200ApplicationJsonDataSessions[];
}


export class ListSessionsOfGroupUsingPost200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: ListSessionsOfGroupUsingPost200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListSessionsOfGroupUsingPost400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListSessionsOfGroupUsingPost401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListSessionsOfGroupUsingPost500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListSessionsOfGroupUsingPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListSessionsOfGroupUsingPostQueryParams;
}


export class ListSessionsOfGroupUsingPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listSessionsOfGroupUsingPost200ApplicationJsonObject?: ListSessionsOfGroupUsingPost200ApplicationJson;

  @SpeakeasyMetadata()
  listSessionsOfGroupUsingPost400ApplicationJsonObject?: ListSessionsOfGroupUsingPost400ApplicationJson;

  @SpeakeasyMetadata()
  listSessionsOfGroupUsingPost401ApplicationJsonObject?: ListSessionsOfGroupUsingPost401ApplicationJson;

  @SpeakeasyMetadata()
  listSessionsOfGroupUsingPost500ApplicationJsonObject?: ListSessionsOfGroupUsingPost500ApplicationJson;
}
