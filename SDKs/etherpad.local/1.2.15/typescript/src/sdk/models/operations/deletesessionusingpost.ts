import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteSessionUsingPostQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=sessionID" })
  sessionId?: string;
}


export class DeleteSessionUsingPostRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DeleteSessionUsingPostQueryParams;
}


export class DeleteSessionUsingPost200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteSessionUsingPost400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteSessionUsingPost401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteSessionUsingPost500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteSessionUsingPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  deleteSessionUsingPost200ApplicationJsonObject?: DeleteSessionUsingPost200ApplicationJson;

  @Metadata()
  deleteSessionUsingPost400ApplicationJsonObject?: DeleteSessionUsingPost400ApplicationJson;

  @Metadata()
  deleteSessionUsingPost401ApplicationJsonObject?: DeleteSessionUsingPost401ApplicationJson;

  @Metadata()
  deleteSessionUsingPost500ApplicationJsonObject?: DeleteSessionUsingPost500ApplicationJson;
}
