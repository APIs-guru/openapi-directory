import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolTelnetServerGetRulesdbPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolTelnetServerGetRulesdbRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolTelnetServerGetRulesdbPathParams;
}


export class ProtocolTelnetServerGetRulesdbResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolTelnetServerGetRulesdb200ApplicationJsonStrings?: string[];
}
