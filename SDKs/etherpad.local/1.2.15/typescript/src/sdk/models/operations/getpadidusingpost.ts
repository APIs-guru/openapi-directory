import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPadIdUsingPostQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=roID" })
  roId?: string;
}


export class GetPadIdUsingPostRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPadIdUsingPostQueryParams;
}


export class GetPadIdUsingPost200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetPadIdUsingPost400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetPadIdUsingPost401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetPadIdUsingPost500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetPadIdUsingPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getPadIdUsingPost200ApplicationJsonObject?: GetPadIdUsingPost200ApplicationJson;

  @Metadata()
  getPadIdUsingPost400ApplicationJsonObject?: GetPadIdUsingPost400ApplicationJson;

  @Metadata()
  getPadIdUsingPost401ApplicationJsonObject?: GetPadIdUsingPost401ApplicationJson;

  @Metadata()
  getPadIdUsingPost500ApplicationJsonObject?: GetPadIdUsingPost500ApplicationJson;
}
