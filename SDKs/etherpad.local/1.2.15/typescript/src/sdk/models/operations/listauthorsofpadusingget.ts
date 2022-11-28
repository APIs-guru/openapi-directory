import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListAuthorsOfPadUsingGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;
}


export class ListAuthorsOfPadUsingGet200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorIDs" })
  authorIDs?: string[];
}


export class ListAuthorsOfPadUsingGet200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: ListAuthorsOfPadUsingGet200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListAuthorsOfPadUsingGet400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListAuthorsOfPadUsingGet401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListAuthorsOfPadUsingGet500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListAuthorsOfPadUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListAuthorsOfPadUsingGetQueryParams;
}


export class ListAuthorsOfPadUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listAuthorsOfPadUsingGet200ApplicationJsonObject?: ListAuthorsOfPadUsingGet200ApplicationJson;

  @SpeakeasyMetadata()
  listAuthorsOfPadUsingGet400ApplicationJsonObject?: ListAuthorsOfPadUsingGet400ApplicationJson;

  @SpeakeasyMetadata()
  listAuthorsOfPadUsingGet401ApplicationJsonObject?: ListAuthorsOfPadUsingGet401ApplicationJson;

  @SpeakeasyMetadata()
  listAuthorsOfPadUsingGet500ApplicationJsonObject?: ListAuthorsOfPadUsingGet500ApplicationJson;
}
