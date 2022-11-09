import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPublicStatusUsingPostQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;
}


export class GetPublicStatusUsingPostRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPublicStatusUsingPostQueryParams;
}


export class GetPublicStatusUsingPost200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=publicStatus" })
  publicStatus?: boolean;
}


export class GetPublicStatusUsingPost200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: GetPublicStatusUsingPost200ApplicationJsonData;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetPublicStatusUsingPost400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetPublicStatusUsingPost401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetPublicStatusUsingPost500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetPublicStatusUsingPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getPublicStatusUsingPost200ApplicationJsonObject?: GetPublicStatusUsingPost200ApplicationJson;

  @Metadata()
  getPublicStatusUsingPost400ApplicationJsonObject?: GetPublicStatusUsingPost400ApplicationJson;

  @Metadata()
  getPublicStatusUsingPost401ApplicationJsonObject?: GetPublicStatusUsingPost401ApplicationJson;

  @Metadata()
  getPublicStatusUsingPost500ApplicationJsonObject?: GetPublicStatusUsingPost500ApplicationJson;
}
