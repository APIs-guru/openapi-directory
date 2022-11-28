import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSavedRevisionsCountUsingGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;
}


export class GetSavedRevisionsCountUsingGet200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedRevisionsCountUsingGet400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedRevisionsCountUsingGet401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedRevisionsCountUsingGet500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedRevisionsCountUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSavedRevisionsCountUsingGetQueryParams;
}


export class GetSavedRevisionsCountUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getSavedRevisionsCountUsingGet200ApplicationJsonObject?: GetSavedRevisionsCountUsingGet200ApplicationJson;

  @SpeakeasyMetadata()
  getSavedRevisionsCountUsingGet400ApplicationJsonObject?: GetSavedRevisionsCountUsingGet400ApplicationJson;

  @SpeakeasyMetadata()
  getSavedRevisionsCountUsingGet401ApplicationJsonObject?: GetSavedRevisionsCountUsingGet401ApplicationJson;

  @SpeakeasyMetadata()
  getSavedRevisionsCountUsingGet500ApplicationJsonObject?: GetSavedRevisionsCountUsingGet500ApplicationJson;
}
