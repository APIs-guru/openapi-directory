import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SendClientsMessageUsingGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=msg" })
  msg?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;
}


export class SendClientsMessageUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SendClientsMessageUsingGetQueryParams;
}


export class SendClientsMessageUsingGet200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class SendClientsMessageUsingGet400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class SendClientsMessageUsingGet401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class SendClientsMessageUsingGet500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class SendClientsMessageUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  sendClientsMessageUsingGet200ApplicationJsonObject?: SendClientsMessageUsingGet200ApplicationJson;

  @Metadata()
  sendClientsMessageUsingGet400ApplicationJsonObject?: SendClientsMessageUsingGet400ApplicationJson;

  @Metadata()
  sendClientsMessageUsingGet401ApplicationJsonObject?: SendClientsMessageUsingGet401ApplicationJson;

  @Metadata()
  sendClientsMessageUsingGet500ApplicationJsonObject?: SendClientsMessageUsingGet500ApplicationJson;
}
