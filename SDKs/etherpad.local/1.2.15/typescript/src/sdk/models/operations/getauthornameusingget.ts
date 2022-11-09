import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAuthorNameUsingGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authorID" })
  authorId?: string;
}


export class GetAuthorNameUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAuthorNameUsingGetQueryParams;
}


export class GetAuthorNameUsingGet200ApplicationJsonDataInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=colorId" })
  colorId?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: number;
}


export class GetAuthorNameUsingGet200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=info" })
  info?: GetAuthorNameUsingGet200ApplicationJsonDataInfo;
}


export class GetAuthorNameUsingGet200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: GetAuthorNameUsingGet200ApplicationJsonData;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetAuthorNameUsingGet400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetAuthorNameUsingGet401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetAuthorNameUsingGet500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetAuthorNameUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getAuthorNameUsingGet200ApplicationJsonObject?: GetAuthorNameUsingGet200ApplicationJson;

  @Metadata()
  getAuthorNameUsingGet400ApplicationJsonObject?: GetAuthorNameUsingGet400ApplicationJson;

  @Metadata()
  getAuthorNameUsingGet401ApplicationJsonObject?: GetAuthorNameUsingGet401ApplicationJson;

  @Metadata()
  getAuthorNameUsingGet500ApplicationJsonObject?: GetAuthorNameUsingGet500ApplicationJson;
}
