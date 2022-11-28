import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRevisionsCountUsingPostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;
}


export class GetRevisionsCountUsingPost200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=revisions" })
  revisions?: number;
}


export class GetRevisionsCountUsingPost200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: GetRevisionsCountUsingPost200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetRevisionsCountUsingPost400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetRevisionsCountUsingPost401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetRevisionsCountUsingPost500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetRevisionsCountUsingPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetRevisionsCountUsingPostQueryParams;
}


export class GetRevisionsCountUsingPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getRevisionsCountUsingPost200ApplicationJsonObject?: GetRevisionsCountUsingPost200ApplicationJson;

  @SpeakeasyMetadata()
  getRevisionsCountUsingPost400ApplicationJsonObject?: GetRevisionsCountUsingPost400ApplicationJson;

  @SpeakeasyMetadata()
  getRevisionsCountUsingPost401ApplicationJsonObject?: GetRevisionsCountUsingPost401ApplicationJson;

  @SpeakeasyMetadata()
  getRevisionsCountUsingPost500ApplicationJsonObject?: GetRevisionsCountUsingPost500ApplicationJson;
}
