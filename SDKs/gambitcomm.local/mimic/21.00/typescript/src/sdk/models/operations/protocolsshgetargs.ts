import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolSshGetArgsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolSshGetArgsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolSshGetArgsPathParams;
}


export class ProtocolSshGetArgsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolSshGetArgs200ApplicationJsonObject?: Map<string, any>;
}
