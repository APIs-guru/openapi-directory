import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolNetflowGetArgsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolNetflowGetArgsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolNetflowGetArgsPathParams;
}


export class ProtocolNetflowGetArgsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolNetflowGetArgs200ApplicationJsonObject?: Map<string, any>;
}
