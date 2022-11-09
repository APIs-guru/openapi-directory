import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SetTextUsingGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;
}


export class SetTextUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SetTextUsingGetQueryParams;
}


export class SetTextUsingGet200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class SetTextUsingGet400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class SetTextUsingGet401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class SetTextUsingGet500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class SetTextUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  setTextUsingGet200ApplicationJsonObject?: SetTextUsingGet200ApplicationJson;

  @Metadata()
  setTextUsingGet400ApplicationJsonObject?: SetTextUsingGet400ApplicationJson;

  @Metadata()
  setTextUsingGet401ApplicationJsonObject?: SetTextUsingGet401ApplicationJson;

  @Metadata()
  setTextUsingGet500ApplicationJsonObject?: SetTextUsingGet500ApplicationJson;
}
