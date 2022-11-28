import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPublicStatusUsingGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;
}


export class GetPublicStatusUsingGet200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=publicStatus" })
  publicStatus?: boolean;
}


export class GetPublicStatusUsingGet200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: GetPublicStatusUsingGet200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetPublicStatusUsingGet400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetPublicStatusUsingGet401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetPublicStatusUsingGet500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetPublicStatusUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPublicStatusUsingGetQueryParams;
}


export class GetPublicStatusUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getPublicStatusUsingGet200ApplicationJsonObject?: GetPublicStatusUsingGet200ApplicationJson;

  @SpeakeasyMetadata()
  getPublicStatusUsingGet400ApplicationJsonObject?: GetPublicStatusUsingGet400ApplicationJson;

  @SpeakeasyMetadata()
  getPublicStatusUsingGet401ApplicationJsonObject?: GetPublicStatusUsingGet401ApplicationJson;

  @SpeakeasyMetadata()
  getPublicStatusUsingGet500ApplicationJsonObject?: GetPublicStatusUsingGet500ApplicationJson;
}
