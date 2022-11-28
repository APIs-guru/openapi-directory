import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRevisionsCountUsingGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;
}


export class GetRevisionsCountUsingGet200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=revisions" })
  revisions?: number;
}


export class GetRevisionsCountUsingGet200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: GetRevisionsCountUsingGet200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetRevisionsCountUsingGet400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetRevisionsCountUsingGet401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetRevisionsCountUsingGet500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetRevisionsCountUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetRevisionsCountUsingGetQueryParams;
}


export class GetRevisionsCountUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getRevisionsCountUsingGet200ApplicationJsonObject?: GetRevisionsCountUsingGet200ApplicationJson;

  @SpeakeasyMetadata()
  getRevisionsCountUsingGet400ApplicationJsonObject?: GetRevisionsCountUsingGet400ApplicationJson;

  @SpeakeasyMetadata()
  getRevisionsCountUsingGet401ApplicationJsonObject?: GetRevisionsCountUsingGet401ApplicationJson;

  @SpeakeasyMetadata()
  getRevisionsCountUsingGet500ApplicationJsonObject?: GetRevisionsCountUsingGet500ApplicationJson;
}
