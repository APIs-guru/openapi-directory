import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolWebGetArgsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolWebGetArgsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolWebGetArgsPathParams;
}


export class ProtocolWebGetArgsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolWebGetArgs200ApplicationJsonObject?: Map<string, any>;
}
