import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CopyPadUsingGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=destinationID" })
  destinationId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=force" })
  force?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sourceID" })
  sourceId?: string;
}


export class CopyPadUsingGet200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CopyPadUsingGet400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CopyPadUsingGet401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CopyPadUsingGet500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class CopyPadUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CopyPadUsingGetQueryParams;
}


export class CopyPadUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  copyPadUsingGet200ApplicationJsonObject?: CopyPadUsingGet200ApplicationJson;

  @SpeakeasyMetadata()
  copyPadUsingGet400ApplicationJsonObject?: CopyPadUsingGet400ApplicationJson;

  @SpeakeasyMetadata()
  copyPadUsingGet401ApplicationJsonObject?: CopyPadUsingGet401ApplicationJson;

  @SpeakeasyMetadata()
  copyPadUsingGet500ApplicationJsonObject?: CopyPadUsingGet500ApplicationJson;
}
