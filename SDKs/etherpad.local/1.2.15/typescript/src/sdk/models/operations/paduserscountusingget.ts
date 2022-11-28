import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PadUsersCountUsingGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;
}


export class PadUsersCountUsingGet200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=padUsersCount" })
  padUsersCount?: number;
}


export class PadUsersCountUsingGet200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: PadUsersCountUsingGet200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PadUsersCountUsingGet400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PadUsersCountUsingGet401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PadUsersCountUsingGet500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PadUsersCountUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PadUsersCountUsingGetQueryParams;
}


export class PadUsersCountUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  padUsersCountUsingGet200ApplicationJsonObject?: PadUsersCountUsingGet200ApplicationJson;

  @SpeakeasyMetadata()
  padUsersCountUsingGet400ApplicationJsonObject?: PadUsersCountUsingGet400ApplicationJson;

  @SpeakeasyMetadata()
  padUsersCountUsingGet401ApplicationJsonObject?: PadUsersCountUsingGet401ApplicationJson;

  @SpeakeasyMetadata()
  padUsersCountUsingGet500ApplicationJsonObject?: PadUsersCountUsingGet500ApplicationJson;
}
