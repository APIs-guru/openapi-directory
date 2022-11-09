import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetReadOnlyIdUsingGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;
}


export class GetReadOnlyIdUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetReadOnlyIdUsingGetQueryParams;
}


export class GetReadOnlyIdUsingGet200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=readOnlyID" })
  readOnlyId?: string;
}


export class GetReadOnlyIdUsingGet200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: GetReadOnlyIdUsingGet200ApplicationJsonData;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetReadOnlyIdUsingGet400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetReadOnlyIdUsingGet401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetReadOnlyIdUsingGet500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetReadOnlyIdUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getReadOnlyIdUsingGet200ApplicationJsonObject?: GetReadOnlyIdUsingGet200ApplicationJson;

  @Metadata()
  getReadOnlyIdUsingGet400ApplicationJsonObject?: GetReadOnlyIdUsingGet400ApplicationJson;

  @Metadata()
  getReadOnlyIdUsingGet401ApplicationJsonObject?: GetReadOnlyIdUsingGet401ApplicationJson;

  @Metadata()
  getReadOnlyIdUsingGet500ApplicationJsonObject?: GetReadOnlyIdUsingGet500ApplicationJson;
}
