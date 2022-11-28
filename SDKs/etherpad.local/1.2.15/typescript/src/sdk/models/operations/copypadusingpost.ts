import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CopyPadUsingPostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=destinationID" })
  destinationId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=force" })
  force?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sourceID" })
  sourceId?: string;
}


export class CopyPadUsingPost200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CopyPadUsingPost400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CopyPadUsingPost401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CopyPadUsingPost500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CopyPadUsingPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CopyPadUsingPostQueryParams;
}


export class CopyPadUsingPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  copyPadUsingPost200ApplicationJsonObject?: CopyPadUsingPost200ApplicationJson;

  @SpeakeasyMetadata()
  copyPadUsingPost400ApplicationJsonObject?: CopyPadUsingPost400ApplicationJson;

  @SpeakeasyMetadata()
  copyPadUsingPost401ApplicationJsonObject?: CopyPadUsingPost401ApplicationJson;

  @SpeakeasyMetadata()
  copyPadUsingPost500ApplicationJsonObject?: CopyPadUsingPost500ApplicationJson;
}
