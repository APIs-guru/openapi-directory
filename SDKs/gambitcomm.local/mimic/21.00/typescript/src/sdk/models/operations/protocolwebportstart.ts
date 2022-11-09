import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolWebPortStartPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=port" })
  port: number;
}


export class ProtocolWebPortStartRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolWebPortStartPathParams;
}


export class ProtocolWebPortStartResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolWebPortStart200ApplicationJsonString?: string;
}
