import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolSshSetConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=argument" })
  argument: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=value" })
  value: string;
}


export class ProtocolSshSetConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolSshSetConfigPathParams;
}


export class ProtocolSshSetConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolSshSetConfig200ApplicationJsonString?: string;
}
