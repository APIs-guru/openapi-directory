import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EchoQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=echo" })
  echo?: string;
}


export class Echo200ApplicationJsonEcho extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_content" })
  content?: string;
}


export class Echo200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=echo" })
  echo?: Echo200ApplicationJsonEcho;
}


export class EchoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: EchoQueryParams;
}


export class EchoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  echo200ApplicationJsonObject?: Echo200ApplicationJson;
}
