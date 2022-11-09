import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetLastEditedUsingGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;
}


export class GetLastEditedUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetLastEditedUsingGetQueryParams;
}


export class GetLastEditedUsingGet200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=lastEdited" })
  lastEdited?: number;
}


export class GetLastEditedUsingGet200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: GetLastEditedUsingGet200ApplicationJsonData;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetLastEditedUsingGet400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetLastEditedUsingGet401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetLastEditedUsingGet500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetLastEditedUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getLastEditedUsingGet200ApplicationJsonObject?: GetLastEditedUsingGet200ApplicationJson;

  @Metadata()
  getLastEditedUsingGet400ApplicationJsonObject?: GetLastEditedUsingGet400ApplicationJson;

  @Metadata()
  getLastEditedUsingGet401ApplicationJsonObject?: GetLastEditedUsingGet401ApplicationJson;

  @Metadata()
  getLastEditedUsingGet500ApplicationJsonObject?: GetLastEditedUsingGet500ApplicationJson;
}
