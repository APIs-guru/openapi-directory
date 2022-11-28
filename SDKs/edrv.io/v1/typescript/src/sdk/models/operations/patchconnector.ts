import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PatchConnectorPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PatchConnectorRequestBody extends SpeakeasyBase {
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


export class PatchConnector201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=ok" })
  ok?: boolean;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: Map<string, any>;
}


export class PatchConnectorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchConnectorPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PatchConnectorRequestBody;
}


export class PatchConnectorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  patchConnector201ApplicationJsonObject?: PatchConnector201ApplicationJson;
}
