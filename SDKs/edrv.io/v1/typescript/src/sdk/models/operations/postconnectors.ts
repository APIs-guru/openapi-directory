import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostConnectorsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=chargestation" })
  chargestation?: string;

  @Metadata({ data: "json, name=format" })
  format?: string;

  @Metadata({ data: "json, name=power" })
  power?: number;

  @Metadata({ data: "json, name=power_type" })
  powerType?: string;

  @Metadata({ data: "json, name=rate" })
  rate?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class PostConnectorsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: PostConnectorsRequestBody;
}


export class PostConnectors200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=ok" })
  ok?: boolean;

  @Metadata({ data: "json, name=result" })
  result?: Map<string, any>;
}


export class PostConnectorsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  postConnectors200ApplicationJsonObject?: PostConnectors200ApplicationJson;
}
