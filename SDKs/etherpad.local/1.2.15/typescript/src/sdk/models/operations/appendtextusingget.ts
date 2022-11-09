import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AppendTextUsingGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;
}


export class AppendTextUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: AppendTextUsingGetQueryParams;
}


export class AppendTextUsingGet200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class AppendTextUsingGet400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class AppendTextUsingGet401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class AppendTextUsingGet500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class AppendTextUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  appendTextUsingGet200ApplicationJsonObject?: AppendTextUsingGet200ApplicationJson;

  @Metadata()
  appendTextUsingGet400ApplicationJsonObject?: AppendTextUsingGet400ApplicationJson;

  @Metadata()
  appendTextUsingGet401ApplicationJsonObject?: AppendTextUsingGet401ApplicationJson;

  @Metadata()
  appendTextUsingGet500ApplicationJsonObject?: AppendTextUsingGet500ApplicationJson;
}
