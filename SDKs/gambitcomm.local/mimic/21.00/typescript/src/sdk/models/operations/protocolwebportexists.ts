import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolWebPortExistsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=port" })
  port: number;
}


export class ProtocolWebPortExistsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolWebPortExistsPathParams;
}


export class ProtocolWebPortExistsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolWebPortExists200ApplicationJsonStrings?: string[];
}
