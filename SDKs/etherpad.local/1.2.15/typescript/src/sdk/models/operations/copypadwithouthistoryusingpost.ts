import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CopyPadWithoutHistoryUsingPostQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=destinationID" })
  destinationId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=force" })
  force?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sourceID" })
  sourceId?: string;
}


export class CopyPadWithoutHistoryUsingPostRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: CopyPadWithoutHistoryUsingPostQueryParams;
}


export class CopyPadWithoutHistoryUsingPost200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CopyPadWithoutHistoryUsingPost400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CopyPadWithoutHistoryUsingPost401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CopyPadWithoutHistoryUsingPost500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CopyPadWithoutHistoryUsingPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  copyPadWithoutHistoryUsingPost200ApplicationJsonObject?: CopyPadWithoutHistoryUsingPost200ApplicationJson;

  @Metadata()
  copyPadWithoutHistoryUsingPost400ApplicationJsonObject?: CopyPadWithoutHistoryUsingPost400ApplicationJson;

  @Metadata()
  copyPadWithoutHistoryUsingPost401ApplicationJsonObject?: CopyPadWithoutHistoryUsingPost401ApplicationJson;

  @Metadata()
  copyPadWithoutHistoryUsingPost500ApplicationJsonObject?: CopyPadWithoutHistoryUsingPost500ApplicationJson;
}
