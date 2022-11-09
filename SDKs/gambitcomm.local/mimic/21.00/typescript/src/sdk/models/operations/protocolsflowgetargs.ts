import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolSflowGetArgsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolSflowGetArgsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolSflowGetArgsPathParams;
}


export class ProtocolSflowGetArgsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolSflowGetArgs200ApplicationJsonObject?: Map<string, any>;
}
