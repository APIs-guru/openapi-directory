import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListAuthorsOfPadUsingPostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;
}


export class ListAuthorsOfPadUsingPost200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorIDs" })
  authorIDs?: string[];
}


export class ListAuthorsOfPadUsingPost200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: ListAuthorsOfPadUsingPost200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListAuthorsOfPadUsingPost400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListAuthorsOfPadUsingPost401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListAuthorsOfPadUsingPost500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListAuthorsOfPadUsingPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListAuthorsOfPadUsingPostQueryParams;
}


export class ListAuthorsOfPadUsingPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listAuthorsOfPadUsingPost200ApplicationJsonObject?: ListAuthorsOfPadUsingPost200ApplicationJson;

  @SpeakeasyMetadata()
  listAuthorsOfPadUsingPost400ApplicationJsonObject?: ListAuthorsOfPadUsingPost400ApplicationJson;

  @SpeakeasyMetadata()
  listAuthorsOfPadUsingPost401ApplicationJsonObject?: ListAuthorsOfPadUsingPost401ApplicationJson;

  @SpeakeasyMetadata()
  listAuthorsOfPadUsingPost500ApplicationJsonObject?: ListAuthorsOfPadUsingPost500ApplicationJson;
}
