import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTextUsingGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rev" })
  rev?: string;
}


export class GetTextUsingGet200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}


export class GetTextUsingGet200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: GetTextUsingGet200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetTextUsingGet400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetTextUsingGet401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetTextUsingGet500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetTextUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetTextUsingGetQueryParams;
}


export class GetTextUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTextUsingGet200ApplicationJsonObject?: GetTextUsingGet200ApplicationJson;

  @SpeakeasyMetadata()
  getTextUsingGet400ApplicationJsonObject?: GetTextUsingGet400ApplicationJson;

  @SpeakeasyMetadata()
  getTextUsingGet401ApplicationJsonObject?: GetTextUsingGet401ApplicationJson;

  @SpeakeasyMetadata()
  getTextUsingGet500ApplicationJsonObject?: GetTextUsingGet500ApplicationJson;
}
