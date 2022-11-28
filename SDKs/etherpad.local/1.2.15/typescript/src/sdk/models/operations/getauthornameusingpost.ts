import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAuthorNameUsingPostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authorID" })
  authorId?: string;
}


export class GetAuthorNameUsingPost200ApplicationJsonDataInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=colorId" })
  colorId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: number;
}


export class GetAuthorNameUsingPost200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=info" })
  info?: GetAuthorNameUsingPost200ApplicationJsonDataInfo;
}


export class GetAuthorNameUsingPost200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: GetAuthorNameUsingPost200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetAuthorNameUsingPost400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetAuthorNameUsingPost401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetAuthorNameUsingPost500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetAuthorNameUsingPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAuthorNameUsingPostQueryParams;
}


export class GetAuthorNameUsingPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getAuthorNameUsingPost200ApplicationJsonObject?: GetAuthorNameUsingPost200ApplicationJson;

  @SpeakeasyMetadata()
  getAuthorNameUsingPost400ApplicationJsonObject?: GetAuthorNameUsingPost400ApplicationJson;

  @SpeakeasyMetadata()
  getAuthorNameUsingPost401ApplicationJsonObject?: GetAuthorNameUsingPost401ApplicationJson;

  @SpeakeasyMetadata()
  getAuthorNameUsingPost500ApplicationJsonObject?: GetAuthorNameUsingPost500ApplicationJson;
}
