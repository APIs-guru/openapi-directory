import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRevisionChangesetUsingGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rev" })
  rev?: string;
}


export class GetRevisionChangesetUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetRevisionChangesetUsingGetQueryParams;
}


export class GetRevisionChangesetUsingGet200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetRevisionChangesetUsingGet400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetRevisionChangesetUsingGet401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetRevisionChangesetUsingGet500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetRevisionChangesetUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getRevisionChangesetUsingGet200ApplicationJsonObject?: GetRevisionChangesetUsingGet200ApplicationJson;

  @Metadata()
  getRevisionChangesetUsingGet400ApplicationJsonObject?: GetRevisionChangesetUsingGet400ApplicationJson;

  @Metadata()
  getRevisionChangesetUsingGet401ApplicationJsonObject?: GetRevisionChangesetUsingGet401ApplicationJson;

  @Metadata()
  getRevisionChangesetUsingGet500ApplicationJsonObject?: GetRevisionChangesetUsingGet500ApplicationJson;
}
