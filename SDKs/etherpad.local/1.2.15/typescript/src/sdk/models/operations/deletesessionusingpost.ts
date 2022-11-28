import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteSessionUsingPostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sessionID" })
  sessionId?: string;
}


export class DeleteSessionUsingPost200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteSessionUsingPost400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteSessionUsingPost401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteSessionUsingPost500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class DeleteSessionUsingPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DeleteSessionUsingPostQueryParams;
}


export class DeleteSessionUsingPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteSessionUsingPost200ApplicationJsonObject?: DeleteSessionUsingPost200ApplicationJson;

  @SpeakeasyMetadata()
  deleteSessionUsingPost400ApplicationJsonObject?: DeleteSessionUsingPost400ApplicationJson;

  @SpeakeasyMetadata()
  deleteSessionUsingPost401ApplicationJsonObject?: DeleteSessionUsingPost401ApplicationJson;

  @SpeakeasyMetadata()
  deleteSessionUsingPost500ApplicationJsonObject?: DeleteSessionUsingPost500ApplicationJson;
}
