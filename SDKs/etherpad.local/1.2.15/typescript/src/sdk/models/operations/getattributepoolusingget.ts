import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAttributePoolUsingGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;
}


export class GetAttributePoolUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAttributePoolUsingGetQueryParams;
}


export class GetAttributePoolUsingGet200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetAttributePoolUsingGet400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetAttributePoolUsingGet401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetAttributePoolUsingGet500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetAttributePoolUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getAttributePoolUsingGet200ApplicationJsonObject?: GetAttributePoolUsingGet200ApplicationJson;

  @Metadata()
  getAttributePoolUsingGet400ApplicationJsonObject?: GetAttributePoolUsingGet400ApplicationJson;

  @Metadata()
  getAttributePoolUsingGet401ApplicationJsonObject?: GetAttributePoolUsingGet401ApplicationJson;

  @Metadata()
  getAttributePoolUsingGet500ApplicationJsonObject?: GetAttributePoolUsingGet500ApplicationJson;
}
