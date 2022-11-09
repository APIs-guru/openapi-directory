import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolCoapSetConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=argument" })
  argument: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=value" })
  value: string;
}


export class ProtocolCoapSetConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolCoapSetConfigPathParams;
}


export class ProtocolCoapSetConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolCoapSetConfig200ApplicationJsonString?: string;
}
