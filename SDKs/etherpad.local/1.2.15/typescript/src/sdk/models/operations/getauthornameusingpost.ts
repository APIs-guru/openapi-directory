import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAuthorNameUsingPostQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=authorID" })
  authorId?: string;
}


export class GetAuthorNameUsingPostRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAuthorNameUsingPostQueryParams;
}


export class GetAuthorNameUsingPost200ApplicationJsonDataInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=colorId" })
  colorId?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: number;
}


export class GetAuthorNameUsingPost200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=info" })
  info?: GetAuthorNameUsingPost200ApplicationJsonDataInfo;
}


export class GetAuthorNameUsingPost200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: GetAuthorNameUsingPost200ApplicationJsonData;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetAuthorNameUsingPost400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetAuthorNameUsingPost401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetAuthorNameUsingPost500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetAuthorNameUsingPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getAuthorNameUsingPost200ApplicationJsonObject?: GetAuthorNameUsingPost200ApplicationJson;

  @Metadata()
  getAuthorNameUsingPost400ApplicationJsonObject?: GetAuthorNameUsingPost400ApplicationJson;

  @Metadata()
  getAuthorNameUsingPost401ApplicationJsonObject?: GetAuthorNameUsingPost401ApplicationJson;

  @Metadata()
  getAuthorNameUsingPost500ApplicationJsonObject?: GetAuthorNameUsingPost500ApplicationJson;
}
