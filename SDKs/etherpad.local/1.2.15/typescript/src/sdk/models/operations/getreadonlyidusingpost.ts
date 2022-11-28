import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetReadOnlyIdUsingPostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;
}


export class GetReadOnlyIdUsingPost200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=readOnlyID" })
  readOnlyId?: string;
}


export class GetReadOnlyIdUsingPost200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: GetReadOnlyIdUsingPost200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetReadOnlyIdUsingPost400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetReadOnlyIdUsingPost401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetReadOnlyIdUsingPost500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetReadOnlyIdUsingPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetReadOnlyIdUsingPostQueryParams;
}


export class GetReadOnlyIdUsingPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getReadOnlyIdUsingPost200ApplicationJsonObject?: GetReadOnlyIdUsingPost200ApplicationJson;

  @SpeakeasyMetadata()
  getReadOnlyIdUsingPost400ApplicationJsonObject?: GetReadOnlyIdUsingPost400ApplicationJson;

  @SpeakeasyMetadata()
  getReadOnlyIdUsingPost401ApplicationJsonObject?: GetReadOnlyIdUsingPost401ApplicationJson;

  @SpeakeasyMetadata()
  getReadOnlyIdUsingPost500ApplicationJsonObject?: GetReadOnlyIdUsingPost500ApplicationJson;
}
