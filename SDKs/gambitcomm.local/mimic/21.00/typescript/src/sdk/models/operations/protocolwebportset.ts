import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolWebPortSetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=port" })
  port: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=protocol" })
  protocol: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class ProtocolWebPortSetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolWebPortSetPathParams;
}


export class ProtocolWebPortSetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolWebPortSet200ApplicationJsonString?: string;
}
