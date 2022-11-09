import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SetTextUsingPostQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=text" })
  text?: string;
}


export class SetTextUsingPostRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SetTextUsingPostQueryParams;
}


export class SetTextUsingPost200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class SetTextUsingPost400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class SetTextUsingPost401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class SetTextUsingPost500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class SetTextUsingPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  setTextUsingPost200ApplicationJsonObject?: SetTextUsingPost200ApplicationJson;

  @Metadata()
  setTextUsingPost400ApplicationJsonObject?: SetTextUsingPost400ApplicationJson;

  @Metadata()
  setTextUsingPost401ApplicationJsonObject?: SetTextUsingPost401ApplicationJson;

  @Metadata()
  setTextUsingPost500ApplicationJsonObject?: SetTextUsingPost500ApplicationJson;
}
