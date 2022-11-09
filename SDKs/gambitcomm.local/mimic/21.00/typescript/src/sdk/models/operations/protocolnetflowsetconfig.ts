import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolNetflowSetConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=argument" })
  argument: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=value" })
  value: string;
}


export class ProtocolNetflowSetConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolNetflowSetConfigPathParams;
}


export class ProtocolNetflowSetConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolNetflowSetConfig200ApplicationJsonString?: string;
}
