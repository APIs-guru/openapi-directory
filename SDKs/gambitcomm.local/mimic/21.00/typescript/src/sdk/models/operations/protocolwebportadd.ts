import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolWebPortAddPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=port" })
  port: number;
}


export class ProtocolWebPortAddRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolWebPortAddPathParams;
}


export class ProtocolWebPortAddResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolWebPortAdd200ApplicationJsonString?: string;
}
