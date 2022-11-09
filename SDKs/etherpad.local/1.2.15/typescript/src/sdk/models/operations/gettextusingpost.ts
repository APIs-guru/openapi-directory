import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetTextUsingPostQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rev" })
  rev?: string;
}


export class GetTextUsingPostRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetTextUsingPostQueryParams;
}


export class GetTextUsingPost200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=text" })
  text?: string;
}


export class GetTextUsingPost200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: GetTextUsingPost200ApplicationJsonData;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetTextUsingPost400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetTextUsingPost401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetTextUsingPost500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetTextUsingPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getTextUsingPost200ApplicationJsonObject?: GetTextUsingPost200ApplicationJson;

  @Metadata()
  getTextUsingPost400ApplicationJsonObject?: GetTextUsingPost400ApplicationJson;

  @Metadata()
  getTextUsingPost401ApplicationJsonObject?: GetTextUsingPost401ApplicationJson;

  @Metadata()
  getTextUsingPost500ApplicationJsonObject?: GetTextUsingPost500ApplicationJson;
}
