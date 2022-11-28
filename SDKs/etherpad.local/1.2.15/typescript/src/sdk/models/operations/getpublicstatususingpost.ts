import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPublicStatusUsingPostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;
}


export class GetPublicStatusUsingPost200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=publicStatus" })
  publicStatus?: boolean;
}


export class GetPublicStatusUsingPost200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: GetPublicStatusUsingPost200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetPublicStatusUsingPost400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetPublicStatusUsingPost401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetPublicStatusUsingPost500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetPublicStatusUsingPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPublicStatusUsingPostQueryParams;
}


export class GetPublicStatusUsingPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getPublicStatusUsingPost200ApplicationJsonObject?: GetPublicStatusUsingPost200ApplicationJson;

  @SpeakeasyMetadata()
  getPublicStatusUsingPost400ApplicationJsonObject?: GetPublicStatusUsingPost400ApplicationJson;

  @SpeakeasyMetadata()
  getPublicStatusUsingPost401ApplicationJsonObject?: GetPublicStatusUsingPost401ApplicationJson;

  @SpeakeasyMetadata()
  getPublicStatusUsingPost500ApplicationJsonObject?: GetPublicStatusUsingPost500ApplicationJson;
}
