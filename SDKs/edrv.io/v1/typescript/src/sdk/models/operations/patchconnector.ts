import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PatchConnectorPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PatchConnectorRequestBody extends SpeakeasyBase {
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


export class PatchConnectorRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchConnectorPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: PatchConnectorRequestBody;
}


export class PatchConnector201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=ok" })
  ok?: boolean;

  @Metadata({ data: "json, name=result" })
  result?: Map<string, any>;
}


export class PatchConnectorResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  patchConnector201ApplicationJsonObject?: PatchConnector201ApplicationJson;
}
