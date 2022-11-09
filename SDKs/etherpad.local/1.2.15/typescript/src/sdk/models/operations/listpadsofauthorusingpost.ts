import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListPadsOfAuthorUsingPostQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authorID" })
  authorId?: string;
}


export class ListPadsOfAuthorUsingPostRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListPadsOfAuthorUsingPostQueryParams;
}


export class ListPadsOfAuthorUsingPost200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=padIDs" })
  padIDs?: string[];
}


export class ListPadsOfAuthorUsingPost200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: ListPadsOfAuthorUsingPost200ApplicationJsonData;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ListPadsOfAuthorUsingPost400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ListPadsOfAuthorUsingPost401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ListPadsOfAuthorUsingPost500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ListPadsOfAuthorUsingPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  listPadsOfAuthorUsingPost200ApplicationJsonObject?: ListPadsOfAuthorUsingPost200ApplicationJson;

  @Metadata()
  listPadsOfAuthorUsingPost400ApplicationJsonObject?: ListPadsOfAuthorUsingPost400ApplicationJson;

  @Metadata()
  listPadsOfAuthorUsingPost401ApplicationJsonObject?: ListPadsOfAuthorUsingPost401ApplicationJson;

  @Metadata()
  listPadsOfAuthorUsingPost500ApplicationJsonObject?: ListPadsOfAuthorUsingPost500ApplicationJson;
}
