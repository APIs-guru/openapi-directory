import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SetPublicStatusUsingGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=publicStatus" })
  publicStatus?: string;
}


export class SetPublicStatusUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SetPublicStatusUsingGetQueryParams;
}


export class SetPublicStatusUsingGet200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class SetPublicStatusUsingGet400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class SetPublicStatusUsingGet401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class SetPublicStatusUsingGet500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class SetPublicStatusUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  setPublicStatusUsingGet200ApplicationJsonObject?: SetPublicStatusUsingGet200ApplicationJson;

  @Metadata()
  setPublicStatusUsingGet400ApplicationJsonObject?: SetPublicStatusUsingGet400ApplicationJson;

  @Metadata()
  setPublicStatusUsingGet401ApplicationJsonObject?: SetPublicStatusUsingGet401ApplicationJson;

  @Metadata()
  setPublicStatusUsingGet500ApplicationJsonObject?: SetPublicStatusUsingGet500ApplicationJson;
}
