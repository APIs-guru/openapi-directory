import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CopyPadUsingGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=destinationID" })
  destinationId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=force" })
  force?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sourceID" })
  sourceId?: string;
}


export class CopyPadUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: CopyPadUsingGetQueryParams;
}


export class CopyPadUsingGet200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CopyPadUsingGet400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CopyPadUsingGet401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CopyPadUsingGet500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class CopyPadUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  copyPadUsingGet200ApplicationJsonObject?: CopyPadUsingGet200ApplicationJson;

  @Metadata()
  copyPadUsingGet400ApplicationJsonObject?: CopyPadUsingGet400ApplicationJson;

  @Metadata()
  copyPadUsingGet401ApplicationJsonObject?: CopyPadUsingGet401ApplicationJson;

  @Metadata()
  copyPadUsingGet500ApplicationJsonObject?: CopyPadUsingGet500ApplicationJson;
}
