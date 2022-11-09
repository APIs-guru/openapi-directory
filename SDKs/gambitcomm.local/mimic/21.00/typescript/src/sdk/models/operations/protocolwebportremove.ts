import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolWebPortRemovePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=port" })
  port: number;
}


export class ProtocolWebPortRemoveRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolWebPortRemovePathParams;
}


export class ProtocolWebPortRemoveResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolWebPortRemove200ApplicationJsonString?: string;
}
