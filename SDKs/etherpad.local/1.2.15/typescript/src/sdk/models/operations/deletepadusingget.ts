import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeletePadUsingGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;
}


export class DeletePadUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: DeletePadUsingGetQueryParams;
}


export class DeletePadUsingGet200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeletePadUsingGet400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeletePadUsingGet401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeletePadUsingGet500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class DeletePadUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  deletePadUsingGet200ApplicationJsonObject?: DeletePadUsingGet200ApplicationJson;

  @Metadata()
  deletePadUsingGet400ApplicationJsonObject?: DeletePadUsingGet400ApplicationJson;

  @Metadata()
  deletePadUsingGet401ApplicationJsonObject?: DeletePadUsingGet401ApplicationJson;

  @Metadata()
  deletePadUsingGet500ApplicationJsonObject?: DeletePadUsingGet500ApplicationJson;
}
