import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRevisionsCountUsingPostQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;
}


export class GetRevisionsCountUsingPostRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetRevisionsCountUsingPostQueryParams;
}


export class GetRevisionsCountUsingPost200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=revisions" })
  revisions?: number;
}


export class GetRevisionsCountUsingPost200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: GetRevisionsCountUsingPost200ApplicationJsonData;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetRevisionsCountUsingPost400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetRevisionsCountUsingPost401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetRevisionsCountUsingPost500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetRevisionsCountUsingPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getRevisionsCountUsingPost200ApplicationJsonObject?: GetRevisionsCountUsingPost200ApplicationJson;

  @Metadata()
  getRevisionsCountUsingPost400ApplicationJsonObject?: GetRevisionsCountUsingPost400ApplicationJson;

  @Metadata()
  getRevisionsCountUsingPost401ApplicationJsonObject?: GetRevisionsCountUsingPost401ApplicationJson;

  @Metadata()
  getRevisionsCountUsingPost500ApplicationJsonObject?: GetRevisionsCountUsingPost500ApplicationJson;
}
