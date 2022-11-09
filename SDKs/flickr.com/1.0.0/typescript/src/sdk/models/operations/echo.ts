import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EchoQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=api_key" })
  apiKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=echo" })
  echo?: string;
}


export class EchoRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: EchoQueryParams;
}


export class Echo200ApplicationJsonEcho extends SpeakeasyBase {
  @Metadata({ data: "json, name=_content" })
  content?: string;
}


export class Echo200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=echo" })
  echo?: Echo200ApplicationJsonEcho;
}


export class EchoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  echo200ApplicationJsonObject?: Echo200ApplicationJson;
}
