import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListAuthorsOfPadUsingGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;
}


export class ListAuthorsOfPadUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListAuthorsOfPadUsingGetQueryParams;
}


export class ListAuthorsOfPadUsingGet200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorIDs" })
  authorIDs?: string[];
}


export class ListAuthorsOfPadUsingGet200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: ListAuthorsOfPadUsingGet200ApplicationJsonData;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ListAuthorsOfPadUsingGet400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ListAuthorsOfPadUsingGet401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ListAuthorsOfPadUsingGet500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ListAuthorsOfPadUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  listAuthorsOfPadUsingGet200ApplicationJsonObject?: ListAuthorsOfPadUsingGet200ApplicationJson;

  @Metadata()
  listAuthorsOfPadUsingGet400ApplicationJsonObject?: ListAuthorsOfPadUsingGet400ApplicationJson;

  @Metadata()
  listAuthorsOfPadUsingGet401ApplicationJsonObject?: ListAuthorsOfPadUsingGet401ApplicationJson;

  @Metadata()
  listAuthorsOfPadUsingGet500ApplicationJsonObject?: ListAuthorsOfPadUsingGet500ApplicationJson;
}
