import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtocolGetConfigPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=prot" })
  prot: string;
}


export class ProtocolGetConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolGetConfigPathParams;
}


export class ProtocolGetConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolGetConfig200ApplicationJsonObject?: Map<string, any>;
}
