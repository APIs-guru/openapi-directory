import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRevisionsCountUsingGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;
}


export class GetRevisionsCountUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetRevisionsCountUsingGetQueryParams;
}


export class GetRevisionsCountUsingGet200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=revisions" })
  revisions?: number;
}


export class GetRevisionsCountUsingGet200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: GetRevisionsCountUsingGet200ApplicationJsonData;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetRevisionsCountUsingGet400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetRevisionsCountUsingGet401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetRevisionsCountUsingGet500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetRevisionsCountUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getRevisionsCountUsingGet200ApplicationJsonObject?: GetRevisionsCountUsingGet200ApplicationJson;

  @Metadata()
  getRevisionsCountUsingGet400ApplicationJsonObject?: GetRevisionsCountUsingGet400ApplicationJson;

  @Metadata()
  getRevisionsCountUsingGet401ApplicationJsonObject?: GetRevisionsCountUsingGet401ApplicationJson;

  @Metadata()
  getRevisionsCountUsingGet500ApplicationJsonObject?: GetRevisionsCountUsingGet500ApplicationJson;
}
