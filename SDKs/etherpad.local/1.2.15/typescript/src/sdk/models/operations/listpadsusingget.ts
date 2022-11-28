import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListPadsUsingGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupID" })
  groupId?: string;
}


export class ListPadsUsingGet200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=padIDs" })
  padIDs?: string[];
}


export class ListPadsUsingGet200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: ListPadsUsingGet200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListPadsUsingGet400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListPadsUsingGet401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListPadsUsingGet500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class ListPadsUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListPadsUsingGetQueryParams;
}


export class ListPadsUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listPadsUsingGet200ApplicationJsonObject?: ListPadsUsingGet200ApplicationJson;

  @SpeakeasyMetadata()
  listPadsUsingGet400ApplicationJsonObject?: ListPadsUsingGet400ApplicationJson;

  @SpeakeasyMetadata()
  listPadsUsingGet401ApplicationJsonObject?: ListPadsUsingGet401ApplicationJson;

  @SpeakeasyMetadata()
  listPadsUsingGet500ApplicationJsonObject?: ListPadsUsingGet500ApplicationJson;
}
