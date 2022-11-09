import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PadUsersCountUsingGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;
}


export class PadUsersCountUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PadUsersCountUsingGetQueryParams;
}


export class PadUsersCountUsingGet200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=padUsersCount" })
  padUsersCount?: number;
}


export class PadUsersCountUsingGet200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: PadUsersCountUsingGet200ApplicationJsonData;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PadUsersCountUsingGet400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PadUsersCountUsingGet401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PadUsersCountUsingGet500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PadUsersCountUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  padUsersCountUsingGet200ApplicationJsonObject?: PadUsersCountUsingGet200ApplicationJson;

  @Metadata()
  padUsersCountUsingGet400ApplicationJsonObject?: PadUsersCountUsingGet400ApplicationJson;

  @Metadata()
  padUsersCountUsingGet401ApplicationJsonObject?: PadUsersCountUsingGet401ApplicationJson;

  @Metadata()
  padUsersCountUsingGet500ApplicationJsonObject?: PadUsersCountUsingGet500ApplicationJson;
}
