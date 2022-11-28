import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CopyPadWithoutHistoryUsingPostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=destinationID" })
  destinationId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=force" })
  force?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sourceID" })
  sourceId?: string;
}


export class CopyPadWithoutHistoryUsingPost200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CopyPadWithoutHistoryUsingPost400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CopyPadWithoutHistoryUsingPost401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CopyPadWithoutHistoryUsingPost500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CopyPadWithoutHistoryUsingPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CopyPadWithoutHistoryUsingPostQueryParams;
}


export class CopyPadWithoutHistoryUsingPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  copyPadWithoutHistoryUsingPost200ApplicationJsonObject?: CopyPadWithoutHistoryUsingPost200ApplicationJson;

  @SpeakeasyMetadata()
  copyPadWithoutHistoryUsingPost400ApplicationJsonObject?: CopyPadWithoutHistoryUsingPost400ApplicationJson;

  @SpeakeasyMetadata()
  copyPadWithoutHistoryUsingPost401ApplicationJsonObject?: CopyPadWithoutHistoryUsingPost401ApplicationJson;

  @SpeakeasyMetadata()
  copyPadWithoutHistoryUsingPost500ApplicationJsonObject?: CopyPadWithoutHistoryUsingPost500ApplicationJson;
}
