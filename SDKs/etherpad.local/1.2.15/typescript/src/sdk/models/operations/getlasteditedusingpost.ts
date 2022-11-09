import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetLastEditedUsingPostQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;
}


export class GetLastEditedUsingPostRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetLastEditedUsingPostQueryParams;
}


export class GetLastEditedUsingPost200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=lastEdited" })
  lastEdited?: number;
}


export class GetLastEditedUsingPost200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: GetLastEditedUsingPost200ApplicationJsonData;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetLastEditedUsingPost400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetLastEditedUsingPost401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetLastEditedUsingPost500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetLastEditedUsingPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getLastEditedUsingPost200ApplicationJsonObject?: GetLastEditedUsingPost200ApplicationJson;

  @Metadata()
  getLastEditedUsingPost400ApplicationJsonObject?: GetLastEditedUsingPost400ApplicationJson;

  @Metadata()
  getLastEditedUsingPost401ApplicationJsonObject?: GetLastEditedUsingPost401ApplicationJson;

  @Metadata()
  getLastEditedUsingPost500ApplicationJsonObject?: GetLastEditedUsingPost500ApplicationJson;
}
