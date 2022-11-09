import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolWebPortStopPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=port" })
  port: number;
}


export class ProtocolWebPortStopRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolWebPortStopPathParams;
}


export class ProtocolWebPortStopResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolWebPortStop200ApplicationJsonString?: string;
}
