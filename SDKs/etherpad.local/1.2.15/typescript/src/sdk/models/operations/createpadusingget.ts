import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreatePadUsingGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;
}


export class CreatePadUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: CreatePadUsingGetQueryParams;
}


export class CreatePadUsingGet200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CreatePadUsingGet400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CreatePadUsingGet401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CreatePadUsingGet500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CreatePadUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createPadUsingGet200ApplicationJsonObject?: CreatePadUsingGet200ApplicationJson;

  @Metadata()
  createPadUsingGet400ApplicationJsonObject?: CreatePadUsingGet400ApplicationJson;

  @Metadata()
  createPadUsingGet401ApplicationJsonObject?: CreatePadUsingGet401ApplicationJson;

  @Metadata()
  createPadUsingGet500ApplicationJsonObject?: CreatePadUsingGet500ApplicationJson;
}
