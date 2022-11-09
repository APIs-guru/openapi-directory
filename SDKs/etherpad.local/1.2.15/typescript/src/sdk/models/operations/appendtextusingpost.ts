import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AppendTextUsingPostQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;
}


export class AppendTextUsingPostRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: AppendTextUsingPostQueryParams;
}


export class AppendTextUsingPost200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class AppendTextUsingPost400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class AppendTextUsingPost401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class AppendTextUsingPost500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class AppendTextUsingPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  appendTextUsingPost200ApplicationJsonObject?: AppendTextUsingPost200ApplicationJson;

  @Metadata()
  appendTextUsingPost400ApplicationJsonObject?: AppendTextUsingPost400ApplicationJson;

  @Metadata()
  appendTextUsingPost401ApplicationJsonObject?: AppendTextUsingPost401ApplicationJson;

  @Metadata()
  appendTextUsingPost500ApplicationJsonObject?: AppendTextUsingPost500ApplicationJson;
}
