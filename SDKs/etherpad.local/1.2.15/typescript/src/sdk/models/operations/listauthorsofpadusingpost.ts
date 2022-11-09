import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListAuthorsOfPadUsingPostQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;
}


export class ListAuthorsOfPadUsingPostRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListAuthorsOfPadUsingPostQueryParams;
}


export class ListAuthorsOfPadUsingPost200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorIDs" })
  authorIDs?: string[];
}


export class ListAuthorsOfPadUsingPost200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: ListAuthorsOfPadUsingPost200ApplicationJsonData;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ListAuthorsOfPadUsingPost400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ListAuthorsOfPadUsingPost401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ListAuthorsOfPadUsingPost500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ListAuthorsOfPadUsingPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  listAuthorsOfPadUsingPost200ApplicationJsonObject?: ListAuthorsOfPadUsingPost200ApplicationJson;

  @Metadata()
  listAuthorsOfPadUsingPost400ApplicationJsonObject?: ListAuthorsOfPadUsingPost400ApplicationJson;

  @Metadata()
  listAuthorsOfPadUsingPost401ApplicationJsonObject?: ListAuthorsOfPadUsingPost401ApplicationJson;

  @Metadata()
  listAuthorsOfPadUsingPost500ApplicationJsonObject?: ListAuthorsOfPadUsingPost500ApplicationJson;
}
