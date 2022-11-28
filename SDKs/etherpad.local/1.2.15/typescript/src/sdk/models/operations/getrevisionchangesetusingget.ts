import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRevisionChangesetUsingGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rev" })
  rev?: string;
}


export class GetRevisionChangesetUsingGet200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetRevisionChangesetUsingGet400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetRevisionChangesetUsingGet401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetRevisionChangesetUsingGet500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetRevisionChangesetUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetRevisionChangesetUsingGetQueryParams;
}


export class GetRevisionChangesetUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getRevisionChangesetUsingGet200ApplicationJsonObject?: GetRevisionChangesetUsingGet200ApplicationJson;

  @SpeakeasyMetadata()
  getRevisionChangesetUsingGet400ApplicationJsonObject?: GetRevisionChangesetUsingGet400ApplicationJson;

  @SpeakeasyMetadata()
  getRevisionChangesetUsingGet401ApplicationJsonObject?: GetRevisionChangesetUsingGet401ApplicationJson;

  @SpeakeasyMetadata()
  getRevisionChangesetUsingGet500ApplicationJsonObject?: GetRevisionChangesetUsingGet500ApplicationJson;
}
