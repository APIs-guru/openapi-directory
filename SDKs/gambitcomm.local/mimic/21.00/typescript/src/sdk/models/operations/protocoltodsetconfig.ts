import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolTodSetConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=argument" })
  argument: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=value" })
  value: string;
}


export class ProtocolTodSetConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolTodSetConfigPathParams;
}


export class ProtocolTodSetConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolTodSetConfig200ApplicationJsonString?: string;
}
