import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostConnectorsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chargestation" })
  chargestation?: string;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: string;

  @SpeakeasyMetadata({ data: "json, name=power" })
  power?: number;

  @SpeakeasyMetadata({ data: "json, name=power_type" })
  powerType?: string;

  @SpeakeasyMetadata({ data: "json, name=rate" })
  rate?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class PostConnectors200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=ok" })
  ok?: boolean;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: Map<string, any>;
}


export class PostConnectorsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostConnectorsRequestBody;
}


export class PostConnectorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  postConnectors200ApplicationJsonObject?: PostConnectors200ApplicationJson;
}
