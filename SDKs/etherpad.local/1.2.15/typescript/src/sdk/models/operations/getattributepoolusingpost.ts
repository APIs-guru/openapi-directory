import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAttributePoolUsingPostQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;
}


export class GetAttributePoolUsingPostRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAttributePoolUsingPostQueryParams;
}


export class GetAttributePoolUsingPost200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetAttributePoolUsingPost400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetAttributePoolUsingPost401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetAttributePoolUsingPost500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetAttributePoolUsingPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getAttributePoolUsingPost200ApplicationJsonObject?: GetAttributePoolUsingPost200ApplicationJson;

  @Metadata()
  getAttributePoolUsingPost400ApplicationJsonObject?: GetAttributePoolUsingPost400ApplicationJson;

  @Metadata()
  getAttributePoolUsingPost401ApplicationJsonObject?: GetAttributePoolUsingPost401ApplicationJson;

  @Metadata()
  getAttributePoolUsingPost500ApplicationJsonObject?: GetAttributePoolUsingPost500ApplicationJson;
}
