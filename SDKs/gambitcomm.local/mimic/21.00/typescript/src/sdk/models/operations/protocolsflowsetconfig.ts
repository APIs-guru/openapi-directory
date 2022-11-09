import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolSflowSetConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=argument" })
  argument: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=value" })
  value: string;
}


export class ProtocolSflowSetConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolSflowSetConfigPathParams;
}


export class ProtocolSflowSetConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolSflowSetConfig200ApplicationJsonString?: string;
}
