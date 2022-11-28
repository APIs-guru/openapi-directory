import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SetPublicStatusUsingPostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=publicStatus" })
  publicStatus?: string;
}


export class SetPublicStatusUsingPost200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class SetPublicStatusUsingPost400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class SetPublicStatusUsingPost401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class SetPublicStatusUsingPost500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class SetPublicStatusUsingPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SetPublicStatusUsingPostQueryParams;
}


export class SetPublicStatusUsingPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  setPublicStatusUsingPost200ApplicationJsonObject?: SetPublicStatusUsingPost200ApplicationJson;

  @SpeakeasyMetadata()
  setPublicStatusUsingPost400ApplicationJsonObject?: SetPublicStatusUsingPost400ApplicationJson;

  @SpeakeasyMetadata()
  setPublicStatusUsingPost401ApplicationJsonObject?: SetPublicStatusUsingPost401ApplicationJson;

  @SpeakeasyMetadata()
  setPublicStatusUsingPost500ApplicationJsonObject?: SetPublicStatusUsingPost500ApplicationJson;
}
