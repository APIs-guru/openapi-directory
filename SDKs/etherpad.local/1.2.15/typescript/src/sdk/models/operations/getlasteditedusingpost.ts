import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetLastEditedUsingPostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;
}


export class GetLastEditedUsingPost200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lastEdited" })
  lastEdited?: number;
}


export class GetLastEditedUsingPost200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: GetLastEditedUsingPost200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetLastEditedUsingPost400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetLastEditedUsingPost401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetLastEditedUsingPost500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetLastEditedUsingPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetLastEditedUsingPostQueryParams;
}


export class GetLastEditedUsingPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getLastEditedUsingPost200ApplicationJsonObject?: GetLastEditedUsingPost200ApplicationJson;

  @SpeakeasyMetadata()
  getLastEditedUsingPost400ApplicationJsonObject?: GetLastEditedUsingPost400ApplicationJson;

  @SpeakeasyMetadata()
  getLastEditedUsingPost401ApplicationJsonObject?: GetLastEditedUsingPost401ApplicationJson;

  @SpeakeasyMetadata()
  getLastEditedUsingPost500ApplicationJsonObject?: GetLastEditedUsingPost500ApplicationJson;
}
