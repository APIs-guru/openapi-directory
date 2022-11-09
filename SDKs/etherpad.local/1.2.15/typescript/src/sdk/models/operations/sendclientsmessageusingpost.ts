import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SendClientsMessageUsingPostQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=msg" })
  msg?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;
}


export class SendClientsMessageUsingPostRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SendClientsMessageUsingPostQueryParams;
}


export class SendClientsMessageUsingPost200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class SendClientsMessageUsingPost400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class SendClientsMessageUsingPost401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class SendClientsMessageUsingPost500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class SendClientsMessageUsingPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  sendClientsMessageUsingPost200ApplicationJsonObject?: SendClientsMessageUsingPost200ApplicationJson;

  @Metadata()
  sendClientsMessageUsingPost400ApplicationJsonObject?: SendClientsMessageUsingPost400ApplicationJson;

  @Metadata()
  sendClientsMessageUsingPost401ApplicationJsonObject?: SendClientsMessageUsingPost401ApplicationJson;

  @Metadata()
  sendClientsMessageUsingPost500ApplicationJsonObject?: SendClientsMessageUsingPost500ApplicationJson;
}
