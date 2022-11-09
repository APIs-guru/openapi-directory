import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolTelnetSetConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=argument" })
  argument: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=value" })
  value: string;
}


export class ProtocolTelnetSetConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolTelnetSetConfigPathParams;
}


export class ProtocolTelnetSetConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolTelnetSetConfig200ApplicationJsonString?: string;
}
