import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListPadsUsingPostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupID" })
  groupId?: string;
}


export class ListPadsUsingPost200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=padIDs" })
  padIDs?: string[];
}


export class ListPadsUsingPost200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: ListPadsUsingPost200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListPadsUsingPost400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListPadsUsingPost401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListPadsUsingPost500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListPadsUsingPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListPadsUsingPostQueryParams;
}


export class ListPadsUsingPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listPadsUsingPost200ApplicationJsonObject?: ListPadsUsingPost200ApplicationJson;

  @SpeakeasyMetadata()
  listPadsUsingPost400ApplicationJsonObject?: ListPadsUsingPost400ApplicationJson;

  @SpeakeasyMetadata()
  listPadsUsingPost401ApplicationJsonObject?: ListPadsUsingPost401ApplicationJson;

  @SpeakeasyMetadata()
  listPadsUsingPost500ApplicationJsonObject?: ListPadsUsingPost500ApplicationJson;
}
