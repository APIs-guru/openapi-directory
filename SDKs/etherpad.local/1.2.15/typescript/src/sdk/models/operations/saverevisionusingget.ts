import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SaveRevisionUsingGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rev" })
  rev?: string;
}


export class SaveRevisionUsingGet200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class SaveRevisionUsingGet400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class SaveRevisionUsingGet401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class SaveRevisionUsingGet500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class SaveRevisionUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SaveRevisionUsingGetQueryParams;
}


export class SaveRevisionUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  saveRevisionUsingGet200ApplicationJsonObject?: SaveRevisionUsingGet200ApplicationJson;

  @SpeakeasyMetadata()
  saveRevisionUsingGet400ApplicationJsonObject?: SaveRevisionUsingGet400ApplicationJson;

  @SpeakeasyMetadata()
  saveRevisionUsingGet401ApplicationJsonObject?: SaveRevisionUsingGet401ApplicationJson;

  @SpeakeasyMetadata()
  saveRevisionUsingGet500ApplicationJsonObject?: SaveRevisionUsingGet500ApplicationJson;
}
