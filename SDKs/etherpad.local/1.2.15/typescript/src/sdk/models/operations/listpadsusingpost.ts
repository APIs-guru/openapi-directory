import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListPadsUsingPostQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=groupID" })
  groupId?: string;
}


export class ListPadsUsingPostRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListPadsUsingPostQueryParams;
}


export class ListPadsUsingPost200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=padIDs" })
  padIDs?: string[];
}


export class ListPadsUsingPost200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: ListPadsUsingPost200ApplicationJsonData;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ListPadsUsingPost400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ListPadsUsingPost401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ListPadsUsingPost500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class ListPadsUsingPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  listPadsUsingPost200ApplicationJsonObject?: ListPadsUsingPost200ApplicationJson;

  @Metadata()
  listPadsUsingPost400ApplicationJsonObject?: ListPadsUsingPost400ApplicationJson;

  @Metadata()
  listPadsUsingPost401ApplicationJsonObject?: ListPadsUsingPost401ApplicationJson;

  @Metadata()
  listPadsUsingPost500ApplicationJsonObject?: ListPadsUsingPost500ApplicationJson;
}
