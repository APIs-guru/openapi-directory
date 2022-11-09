import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolTelnetGetArgsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolTelnetGetArgsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolTelnetGetArgsPathParams;
}


export class ProtocolTelnetGetArgsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolTelnetGetArgs200ApplicationJsonObject?: Map<string, any>;
}
