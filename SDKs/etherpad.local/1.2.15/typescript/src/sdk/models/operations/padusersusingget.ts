import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PadUsersUsingGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;
}


export class PadUsersUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PadUsersUsingGetQueryParams;
}


export class PadUsersUsingGet200ApplicationJsonDataPadUsers extends SpeakeasyBase {
  @Metadata({ data: "json, name=colorId" })
  colorId?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: number;
}


export class PadUsersUsingGet200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=padUsers", elemType: operations.PadUsersUsingGet200ApplicationJsonDataPadUsers })
  padUsers?: PadUsersUsingGet200ApplicationJsonDataPadUsers[];
}


export class PadUsersUsingGet200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: PadUsersUsingGet200ApplicationJsonData;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PadUsersUsingGet400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PadUsersUsingGet401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PadUsersUsingGet500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PadUsersUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  padUsersUsingGet200ApplicationJsonObject?: PadUsersUsingGet200ApplicationJson;

  @Metadata()
  padUsersUsingGet400ApplicationJsonObject?: PadUsersUsingGet400ApplicationJson;

  @Metadata()
  padUsersUsingGet401ApplicationJsonObject?: PadUsersUsingGet401ApplicationJson;

  @Metadata()
  padUsersUsingGet500ApplicationJsonObject?: PadUsersUsingGet500ApplicationJson;
}
