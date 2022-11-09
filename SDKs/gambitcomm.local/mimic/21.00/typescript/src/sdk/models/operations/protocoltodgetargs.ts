import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolTodGetArgsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolTodGetArgsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolTodGetArgsPathParams;
}


export class ProtocolTodGetArgsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolTodGetArgs200ApplicationJsonObject?: Map<string, any>;
}
