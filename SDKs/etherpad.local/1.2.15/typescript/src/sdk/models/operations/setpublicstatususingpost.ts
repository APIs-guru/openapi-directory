import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SetPublicStatusUsingPostQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=publicStatus" })
  publicStatus?: string;
}


export class SetPublicStatusUsingPostRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SetPublicStatusUsingPostQueryParams;
}


export class SetPublicStatusUsingPost200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class SetPublicStatusUsingPost400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class SetPublicStatusUsingPost401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class SetPublicStatusUsingPost500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class SetPublicStatusUsingPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  setPublicStatusUsingPost200ApplicationJsonObject?: SetPublicStatusUsingPost200ApplicationJson;

  @Metadata()
  setPublicStatusUsingPost400ApplicationJsonObject?: SetPublicStatusUsingPost400ApplicationJson;

  @Metadata()
  setPublicStatusUsingPost401ApplicationJsonObject?: SetPublicStatusUsingPost401ApplicationJson;

  @Metadata()
  setPublicStatusUsingPost500ApplicationJsonObject?: SetPublicStatusUsingPost500ApplicationJson;
}
