import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolSnmptcpGetArgsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolSnmptcpGetArgsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolSnmptcpGetArgsPathParams;
}


export class ProtocolSnmptcpGetArgsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolSnmptcpGetArgs200ApplicationJsonObject?: Map<string, any>;
}
