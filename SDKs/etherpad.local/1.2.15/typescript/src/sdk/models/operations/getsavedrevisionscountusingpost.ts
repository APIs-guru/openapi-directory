import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSavedRevisionsCountUsingPostQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;
}


export class GetSavedRevisionsCountUsingPostRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetSavedRevisionsCountUsingPostQueryParams;
}


export class GetSavedRevisionsCountUsingPost200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedRevisionsCountUsingPost400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedRevisionsCountUsingPost401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedRevisionsCountUsingPost500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetSavedRevisionsCountUsingPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getSavedRevisionsCountUsingPost200ApplicationJsonObject?: GetSavedRevisionsCountUsingPost200ApplicationJson;

  @Metadata()
  getSavedRevisionsCountUsingPost400ApplicationJsonObject?: GetSavedRevisionsCountUsingPost400ApplicationJson;

  @Metadata()
  getSavedRevisionsCountUsingPost401ApplicationJsonObject?: GetSavedRevisionsCountUsingPost401ApplicationJson;

  @Metadata()
  getSavedRevisionsCountUsingPost500ApplicationJsonObject?: GetSavedRevisionsCountUsingPost500ApplicationJson;
}
