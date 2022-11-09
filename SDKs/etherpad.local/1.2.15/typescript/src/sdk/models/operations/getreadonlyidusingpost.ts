import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetReadOnlyIdUsingPostQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;
}


export class GetReadOnlyIdUsingPostRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetReadOnlyIdUsingPostQueryParams;
}


export class GetReadOnlyIdUsingPost200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=readOnlyID" })
  readOnlyId?: string;
}


export class GetReadOnlyIdUsingPost200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: GetReadOnlyIdUsingPost200ApplicationJsonData;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetReadOnlyIdUsingPost400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetReadOnlyIdUsingPost401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetReadOnlyIdUsingPost500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetReadOnlyIdUsingPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getReadOnlyIdUsingPost200ApplicationJsonObject?: GetReadOnlyIdUsingPost200ApplicationJson;

  @Metadata()
  getReadOnlyIdUsingPost400ApplicationJsonObject?: GetReadOnlyIdUsingPost400ApplicationJson;

  @Metadata()
  getReadOnlyIdUsingPost401ApplicationJsonObject?: GetReadOnlyIdUsingPost401ApplicationJson;

  @Metadata()
  getReadOnlyIdUsingPost500ApplicationJsonObject?: GetReadOnlyIdUsingPost500ApplicationJson;
}
