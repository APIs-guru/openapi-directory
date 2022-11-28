import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CopyPadWithoutHistoryUsingGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=destinationID" })
  destinationId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=force" })
  force?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sourceID" })
  sourceId?: string;
}


export class CopyPadWithoutHistoryUsingGet200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CopyPadWithoutHistoryUsingGet400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CopyPadWithoutHistoryUsingGet401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CopyPadWithoutHistoryUsingGet500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CopyPadWithoutHistoryUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CopyPadWithoutHistoryUsingGetQueryParams;
}


export class CopyPadWithoutHistoryUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  copyPadWithoutHistoryUsingGet200ApplicationJsonObject?: CopyPadWithoutHistoryUsingGet200ApplicationJson;

  @SpeakeasyMetadata()
  copyPadWithoutHistoryUsingGet400ApplicationJsonObject?: CopyPadWithoutHistoryUsingGet400ApplicationJson;

  @SpeakeasyMetadata()
  copyPadWithoutHistoryUsingGet401ApplicationJsonObject?: CopyPadWithoutHistoryUsingGet401ApplicationJson;

  @SpeakeasyMetadata()
  copyPadWithoutHistoryUsingGet500ApplicationJsonObject?: CopyPadWithoutHistoryUsingGet500ApplicationJson;
}
