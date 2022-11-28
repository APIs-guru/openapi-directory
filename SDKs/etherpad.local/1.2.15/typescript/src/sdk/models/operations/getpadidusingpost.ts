import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPadIdUsingPostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=roID" })
  roId?: string;
}


export class GetPadIdUsingPost200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetPadIdUsingPost400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetPadIdUsingPost401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetPadIdUsingPost500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetPadIdUsingPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPadIdUsingPostQueryParams;
}


export class GetPadIdUsingPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getPadIdUsingPost200ApplicationJsonObject?: GetPadIdUsingPost200ApplicationJson;

  @SpeakeasyMetadata()
  getPadIdUsingPost400ApplicationJsonObject?: GetPadIdUsingPost400ApplicationJson;

  @SpeakeasyMetadata()
  getPadIdUsingPost401ApplicationJsonObject?: GetPadIdUsingPost401ApplicationJson;

  @SpeakeasyMetadata()
  getPadIdUsingPost500ApplicationJsonObject?: GetPadIdUsingPost500ApplicationJson;
}
