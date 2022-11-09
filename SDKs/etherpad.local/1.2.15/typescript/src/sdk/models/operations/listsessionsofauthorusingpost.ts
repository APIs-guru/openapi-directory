import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListSessionsOfAuthorUsingPostQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authorID" })
  authorId?: string;
}


export class ListSessionsOfAuthorUsingPostRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListSessionsOfAuthorUsingPostQueryParams;
}


export class ListSessionsOfAuthorUsingPost200ApplicationJsonDataSessions extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorID" })
  authorId?: string;

  @Metadata({ data: "json, name=groupID" })
  groupId?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=validUntil" })
  validUntil?: number;
}


export class ListSessionsOfAuthorUsingPost200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=sessions", elemType: operations.ListSessionsOfAuthorUsingPost200ApplicationJsonDataSessions })
  sessions?: ListSessionsOfAuthorUsingPost200ApplicationJsonDataSessions[];
}


export class ListSessionsOfAuthorUsingPost200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: ListSessionsOfAuthorUsingPost200ApplicationJsonData;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ListSessionsOfAuthorUsingPost400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ListSessionsOfAuthorUsingPost401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ListSessionsOfAuthorUsingPost500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ListSessionsOfAuthorUsingPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  listSessionsOfAuthorUsingPost200ApplicationJsonObject?: ListSessionsOfAuthorUsingPost200ApplicationJson;

  @Metadata()
  listSessionsOfAuthorUsingPost400ApplicationJsonObject?: ListSessionsOfAuthorUsingPost400ApplicationJson;

  @Metadata()
  listSessionsOfAuthorUsingPost401ApplicationJsonObject?: ListSessionsOfAuthorUsingPost401ApplicationJson;

  @Metadata()
  listSessionsOfAuthorUsingPost500ApplicationJsonObject?: ListSessionsOfAuthorUsingPost500ApplicationJson;
}
