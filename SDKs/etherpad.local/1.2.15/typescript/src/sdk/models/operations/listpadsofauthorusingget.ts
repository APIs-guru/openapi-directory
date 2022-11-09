import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListPadsOfAuthorUsingGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authorID" })
  authorId?: string;
}


export class ListPadsOfAuthorUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListPadsOfAuthorUsingGetQueryParams;
}


export class ListPadsOfAuthorUsingGet200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=padIDs" })
  padIDs?: string[];
}


export class ListPadsOfAuthorUsingGet200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: ListPadsOfAuthorUsingGet200ApplicationJsonData;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ListPadsOfAuthorUsingGet400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ListPadsOfAuthorUsingGet401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ListPadsOfAuthorUsingGet500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ListPadsOfAuthorUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  listPadsOfAuthorUsingGet200ApplicationJsonObject?: ListPadsOfAuthorUsingGet200ApplicationJson;

  @Metadata()
  listPadsOfAuthorUsingGet400ApplicationJsonObject?: ListPadsOfAuthorUsingGet400ApplicationJson;

  @Metadata()
  listPadsOfAuthorUsingGet401ApplicationJsonObject?: ListPadsOfAuthorUsingGet401ApplicationJson;

  @Metadata()
  listPadsOfAuthorUsingGet500ApplicationJsonObject?: ListPadsOfAuthorUsingGet500ApplicationJson;
}
