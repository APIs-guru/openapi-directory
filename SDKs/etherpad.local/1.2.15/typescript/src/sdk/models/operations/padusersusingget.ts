import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PadUsersUsingGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;
}


export class PadUsersUsingGet200ApplicationJsonDataPadUsers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=colorId" })
  colorId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: number;
}


export class PadUsersUsingGet200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=padUsers", elemType: PadUsersUsingGet200ApplicationJsonDataPadUsers })
  padUsers?: PadUsersUsingGet200ApplicationJsonDataPadUsers[];
}


export class PadUsersUsingGet200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: PadUsersUsingGet200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PadUsersUsingGet400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PadUsersUsingGet401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PadUsersUsingGet500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PadUsersUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PadUsersUsingGetQueryParams;
}


export class PadUsersUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  padUsersUsingGet200ApplicationJsonObject?: PadUsersUsingGet200ApplicationJson;

  @SpeakeasyMetadata()
  padUsersUsingGet400ApplicationJsonObject?: PadUsersUsingGet400ApplicationJson;

  @SpeakeasyMetadata()
  padUsersUsingGet401ApplicationJsonObject?: PadUsersUsingGet401ApplicationJson;

  @SpeakeasyMetadata()
  padUsersUsingGet500ApplicationJsonObject?: PadUsersUsingGet500ApplicationJson;
}
