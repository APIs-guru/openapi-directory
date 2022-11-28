import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtocolProxySetConfigPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=argument" })
  argument: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=value" })
  value: string;
}


export class ProtocolProxySetConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolProxySetConfigPathParams;
}


export class ProtocolProxySetConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolProxySetConfig200ApplicationJsonString?: string;
}
