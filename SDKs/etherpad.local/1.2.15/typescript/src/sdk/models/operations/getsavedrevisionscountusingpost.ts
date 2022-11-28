import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSavedRevisionsCountUsingPostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;
}


export class GetSavedRevisionsCountUsingPost200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedRevisionsCountUsingPost400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedRevisionsCountUsingPost401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedRevisionsCountUsingPost500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedRevisionsCountUsingPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSavedRevisionsCountUsingPostQueryParams;
}


export class GetSavedRevisionsCountUsingPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getSavedRevisionsCountUsingPost200ApplicationJsonObject?: GetSavedRevisionsCountUsingPost200ApplicationJson;

  @SpeakeasyMetadata()
  getSavedRevisionsCountUsingPost400ApplicationJsonObject?: GetSavedRevisionsCountUsingPost400ApplicationJson;

  @SpeakeasyMetadata()
  getSavedRevisionsCountUsingPost401ApplicationJsonObject?: GetSavedRevisionsCountUsingPost401ApplicationJson;

  @SpeakeasyMetadata()
  getSavedRevisionsCountUsingPost500ApplicationJsonObject?: GetSavedRevisionsCountUsingPost500ApplicationJson;
}
