import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CopyPadWithoutHistoryUsingGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=destinationID" })
  destinationId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=force" })
  force?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sourceID" })
  sourceId?: string;
}


export class CopyPadWithoutHistoryUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: CopyPadWithoutHistoryUsingGetQueryParams;
}


export class CopyPadWithoutHistoryUsingGet200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CopyPadWithoutHistoryUsingGet400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CopyPadWithoutHistoryUsingGet401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CopyPadWithoutHistoryUsingGet500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CopyPadWithoutHistoryUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  copyPadWithoutHistoryUsingGet200ApplicationJsonObject?: CopyPadWithoutHistoryUsingGet200ApplicationJson;

  @Metadata()
  copyPadWithoutHistoryUsingGet400ApplicationJsonObject?: CopyPadWithoutHistoryUsingGet400ApplicationJson;

  @Metadata()
  copyPadWithoutHistoryUsingGet401ApplicationJsonObject?: CopyPadWithoutHistoryUsingGet401ApplicationJson;

  @Metadata()
  copyPadWithoutHistoryUsingGet500ApplicationJsonObject?: CopyPadWithoutHistoryUsingGet500ApplicationJson;
}
