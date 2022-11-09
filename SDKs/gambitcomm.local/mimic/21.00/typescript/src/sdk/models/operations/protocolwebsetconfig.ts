import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolWebSetConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=argument" })
  argument: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=value" })
  value: string;
}


export class ProtocolWebSetConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolWebSetConfigPathParams;
}


export class ProtocolWebSetConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolWebSetConfig200ApplicationJsonString?: string;
}
