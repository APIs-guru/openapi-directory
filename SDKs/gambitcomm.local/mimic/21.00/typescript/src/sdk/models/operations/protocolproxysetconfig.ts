import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolProxySetConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=argument" })
  argument: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=value" })
  value: string;
}


export class ProtocolProxySetConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolProxySetConfigPathParams;
}


export class ProtocolProxySetConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolProxySetConfig200ApplicationJsonString?: string;
}
