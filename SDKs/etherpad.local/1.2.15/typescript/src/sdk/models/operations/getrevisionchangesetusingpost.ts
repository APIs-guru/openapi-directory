import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRevisionChangesetUsingPostQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rev" })
  rev?: string;
}


export class GetRevisionChangesetUsingPostRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetRevisionChangesetUsingPostQueryParams;
}


export class GetRevisionChangesetUsingPost200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetRevisionChangesetUsingPost400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetRevisionChangesetUsingPost401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetRevisionChangesetUsingPost500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetRevisionChangesetUsingPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getRevisionChangesetUsingPost200ApplicationJsonObject?: GetRevisionChangesetUsingPost200ApplicationJson;

  @Metadata()
  getRevisionChangesetUsingPost400ApplicationJsonObject?: GetRevisionChangesetUsingPost400ApplicationJson;

  @Metadata()
  getRevisionChangesetUsingPost401ApplicationJsonObject?: GetRevisionChangesetUsingPost401ApplicationJson;

  @Metadata()
  getRevisionChangesetUsingPost500ApplicationJsonObject?: GetRevisionChangesetUsingPost500ApplicationJson;
}
