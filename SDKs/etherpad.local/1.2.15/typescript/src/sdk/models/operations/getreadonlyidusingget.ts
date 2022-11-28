import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetReadOnlyIdUsingGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;
}


export class GetReadOnlyIdUsingGet200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=readOnlyID" })
  readOnlyId?: string;
}


export class GetReadOnlyIdUsingGet200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: GetReadOnlyIdUsingGet200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetReadOnlyIdUsingGet400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetReadOnlyIdUsingGet401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetReadOnlyIdUsingGet500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetReadOnlyIdUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetReadOnlyIdUsingGetQueryParams;
}


export class GetReadOnlyIdUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getReadOnlyIdUsingGet200ApplicationJsonObject?: GetReadOnlyIdUsingGet200ApplicationJson;

  @SpeakeasyMetadata()
  getReadOnlyIdUsingGet400ApplicationJsonObject?: GetReadOnlyIdUsingGet400ApplicationJson;

  @SpeakeasyMetadata()
  getReadOnlyIdUsingGet401ApplicationJsonObject?: GetReadOnlyIdUsingGet401ApplicationJson;

  @SpeakeasyMetadata()
  getReadOnlyIdUsingGet500ApplicationJsonObject?: GetReadOnlyIdUsingGet500ApplicationJson;
}
