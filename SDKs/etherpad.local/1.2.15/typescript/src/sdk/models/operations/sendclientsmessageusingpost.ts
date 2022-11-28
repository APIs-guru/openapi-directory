import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SendClientsMessageUsingPostQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=msg" })
  msg?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=padID" })
  padId?: string;
}


export class SendClientsMessageUsingPost200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class SendClientsMessageUsingPost400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class SendClientsMessageUsingPost401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class SendClientsMessageUsingPost500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class SendClientsMessageUsingPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SendClientsMessageUsingPostQueryParams;
}


export class SendClientsMessageUsingPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  sendClientsMessageUsingPost200ApplicationJsonObject?: SendClientsMessageUsingPost200ApplicationJson;

  @SpeakeasyMetadata()
  sendClientsMessageUsingPost400ApplicationJsonObject?: SendClientsMessageUsingPost400ApplicationJson;

  @SpeakeasyMetadata()
  sendClientsMessageUsingPost401ApplicationJsonObject?: SendClientsMessageUsingPost401ApplicationJson;

  @SpeakeasyMetadata()
  sendClientsMessageUsingPost500ApplicationJsonObject?: SendClientsMessageUsingPost500ApplicationJson;
}
