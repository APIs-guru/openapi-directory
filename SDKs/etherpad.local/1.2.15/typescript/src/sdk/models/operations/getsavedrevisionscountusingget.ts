import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSavedRevisionsCountUsingGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;
}


export class GetSavedRevisionsCountUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSavedRevisionsCountUsingGetQueryParams;
}


export class GetSavedRevisionsCountUsingGet200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedRevisionsCountUsingGet400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedRevisionsCountUsingGet401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedRevisionsCountUsingGet500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedRevisionsCountUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getSavedRevisionsCountUsingGet200ApplicationJsonObject?: GetSavedRevisionsCountUsingGet200ApplicationJson;

  @Metadata()
  getSavedRevisionsCountUsingGet400ApplicationJsonObject?: GetSavedRevisionsCountUsingGet400ApplicationJson;

  @Metadata()
  getSavedRevisionsCountUsingGet401ApplicationJsonObject?: GetSavedRevisionsCountUsingGet401ApplicationJson;

  @Metadata()
  getSavedRevisionsCountUsingGet500ApplicationJsonObject?: GetSavedRevisionsCountUsingGet500ApplicationJson;
}
