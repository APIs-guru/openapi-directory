import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPadIdUsingGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=roID" })
  roId?: string;
}


export class GetPadIdUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPadIdUsingGetQueryParams;
}


export class GetPadIdUsingGet200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetPadIdUsingGet400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetPadIdUsingGet401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetPadIdUsingGet500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetPadIdUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getPadIdUsingGet200ApplicationJsonObject?: GetPadIdUsingGet200ApplicationJson;

  @Metadata()
  getPadIdUsingGet400ApplicationJsonObject?: GetPadIdUsingGet400ApplicationJson;

  @Metadata()
  getPadIdUsingGet401ApplicationJsonObject?: GetPadIdUsingGet401ApplicationJson;

  @Metadata()
  getPadIdUsingGet500ApplicationJsonObject?: GetPadIdUsingGet500ApplicationJson;
}
