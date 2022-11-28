import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RestoreRevisionUsingPostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rev" })
  rev?: string;
}


export class RestoreRevisionUsingPost200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class RestoreRevisionUsingPost400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class RestoreRevisionUsingPost401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class RestoreRevisionUsingPost500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class RestoreRevisionUsingPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: RestoreRevisionUsingPostQueryParams;
}


export class RestoreRevisionUsingPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  restoreRevisionUsingPost200ApplicationJsonObject?: RestoreRevisionUsingPost200ApplicationJson;

  @SpeakeasyMetadata()
  restoreRevisionUsingPost400ApplicationJsonObject?: RestoreRevisionUsingPost400ApplicationJson;

  @SpeakeasyMetadata()
  restoreRevisionUsingPost401ApplicationJsonObject?: RestoreRevisionUsingPost401ApplicationJson;

  @SpeakeasyMetadata()
  restoreRevisionUsingPost500ApplicationJsonObject?: RestoreRevisionUsingPost500ApplicationJson;
}
