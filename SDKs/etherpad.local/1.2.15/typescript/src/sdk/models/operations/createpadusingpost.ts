import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreatePadUsingPostQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;
}


export class CreatePadUsingPostRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: CreatePadUsingPostQueryParams;
}


export class CreatePadUsingPost200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CreatePadUsingPost400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CreatePadUsingPost401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CreatePadUsingPost500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CreatePadUsingPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createPadUsingPost200ApplicationJsonObject?: CreatePadUsingPost200ApplicationJson;

  @Metadata()
  createPadUsingPost400ApplicationJsonObject?: CreatePadUsingPost400ApplicationJson;

  @Metadata()
  createPadUsingPost401ApplicationJsonObject?: CreatePadUsingPost401ApplicationJson;

  @Metadata()
  createPadUsingPost500ApplicationJsonObject?: CreatePadUsingPost500ApplicationJson;
}
