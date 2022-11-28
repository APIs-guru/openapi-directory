import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListSessionsOfGroupUsingGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupID" })
  groupId?: string;
}


export class ListSessionsOfGroupUsingGet200ApplicationJsonDataSessions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorID" })
  authorId?: string;

  @SpeakeasyMetadata({ data: "json, name=groupID" })
  groupId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=validUntil" })
  validUntil?: number;
}


export class ListSessionsOfGroupUsingGet200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sessions", elemType: ListSessionsOfGroupUsingGet200ApplicationJsonDataSessions })
  sessions?: ListSessionsOfGroupUsingGet200ApplicationJsonDataSessions[];
}


export class ListSessionsOfGroupUsingGet200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: ListSessionsOfGroupUsingGet200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListSessionsOfGroupUsingGet400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListSessionsOfGroupUsingGet401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListSessionsOfGroupUsingGet500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListSessionsOfGroupUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListSessionsOfGroupUsingGetQueryParams;
}


export class ListSessionsOfGroupUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listSessionsOfGroupUsingGet200ApplicationJsonObject?: ListSessionsOfGroupUsingGet200ApplicationJson;

  @SpeakeasyMetadata()
  listSessionsOfGroupUsingGet400ApplicationJsonObject?: ListSessionsOfGroupUsingGet400ApplicationJson;

  @SpeakeasyMetadata()
  listSessionsOfGroupUsingGet401ApplicationJsonObject?: ListSessionsOfGroupUsingGet401ApplicationJson;

  @SpeakeasyMetadata()
  listSessionsOfGroupUsingGet500ApplicationJsonObject?: ListSessionsOfGroupUsingGet500ApplicationJson;
}
