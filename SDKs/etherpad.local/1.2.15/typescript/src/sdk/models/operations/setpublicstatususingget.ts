import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SetPublicStatusUsingGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=publicStatus" })
  publicStatus?: string;
}


export class SetPublicStatusUsingGet200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class SetPublicStatusUsingGet400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class SetPublicStatusUsingGet401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class SetPublicStatusUsingGet500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class SetPublicStatusUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SetPublicStatusUsingGetQueryParams;
}


export class SetPublicStatusUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  setPublicStatusUsingGet200ApplicationJsonObject?: SetPublicStatusUsingGet200ApplicationJson;

  @SpeakeasyMetadata()
  setPublicStatusUsingGet400ApplicationJsonObject?: SetPublicStatusUsingGet400ApplicationJson;

  @SpeakeasyMetadata()
  setPublicStatusUsingGet401ApplicationJsonObject?: SetPublicStatusUsingGet401ApplicationJson;

  @SpeakeasyMetadata()
  setPublicStatusUsingGet500ApplicationJsonObject?: SetPublicStatusUsingGet500ApplicationJson;
}
