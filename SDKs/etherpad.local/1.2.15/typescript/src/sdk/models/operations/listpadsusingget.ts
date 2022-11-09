import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListPadsUsingGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=groupID" })
  groupId?: string;
}


export class ListPadsUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListPadsUsingGetQueryParams;
}


export class ListPadsUsingGet200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=padIDs" })
  padIDs?: string[];
}


export class ListPadsUsingGet200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: ListPadsUsingGet200ApplicationJsonData;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ListPadsUsingGet400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ListPadsUsingGet401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ListPadsUsingGet500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ListPadsUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  listPadsUsingGet200ApplicationJsonObject?: ListPadsUsingGet200ApplicationJson;

  @Metadata()
  listPadsUsingGet400ApplicationJsonObject?: ListPadsUsingGet400ApplicationJson;

  @Metadata()
  listPadsUsingGet401ApplicationJsonObject?: ListPadsUsingGet401ApplicationJson;

  @Metadata()
  listPadsUsingGet500ApplicationJsonObject?: ListPadsUsingGet500ApplicationJson;
}
