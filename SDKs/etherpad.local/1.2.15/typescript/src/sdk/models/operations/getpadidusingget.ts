import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPadIdUsingGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=roID" })
  roId?: string;
}


export class GetPadIdUsingGet200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetPadIdUsingGet400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetPadIdUsingGet401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetPadIdUsingGet500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetPadIdUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPadIdUsingGetQueryParams;
}


export class GetPadIdUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getPadIdUsingGet200ApplicationJsonObject?: GetPadIdUsingGet200ApplicationJson;

  @SpeakeasyMetadata()
  getPadIdUsingGet400ApplicationJsonObject?: GetPadIdUsingGet400ApplicationJson;

  @SpeakeasyMetadata()
  getPadIdUsingGet401ApplicationJsonObject?: GetPadIdUsingGet401ApplicationJson;

  @SpeakeasyMetadata()
  getPadIdUsingGet500ApplicationJsonObject?: GetPadIdUsingGet500ApplicationJson;
}
