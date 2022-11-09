import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPublicStatusUsingGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;
}


export class GetPublicStatusUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPublicStatusUsingGetQueryParams;
}


export class GetPublicStatusUsingGet200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=publicStatus" })
  publicStatus?: boolean;
}


export class GetPublicStatusUsingGet200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: GetPublicStatusUsingGet200ApplicationJsonData;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetPublicStatusUsingGet400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetPublicStatusUsingGet401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetPublicStatusUsingGet500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetPublicStatusUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getPublicStatusUsingGet200ApplicationJsonObject?: GetPublicStatusUsingGet200ApplicationJson;

  @Metadata()
  getPublicStatusUsingGet400ApplicationJsonObject?: GetPublicStatusUsingGet400ApplicationJson;

  @Metadata()
  getPublicStatusUsingGet401ApplicationJsonObject?: GetPublicStatusUsingGet401ApplicationJson;

  @Metadata()
  getPublicStatusUsingGet500ApplicationJsonObject?: GetPublicStatusUsingGet500ApplicationJson;
}
