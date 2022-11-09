import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProtocolDhcpGetConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolDhcpGetConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolDhcpGetConfigPathParams;
}


export class ProtocolDhcpGetConfigResponse extends SpeakeasyBase {
  @Metadata()
  configDhcp?: shared.ConfigDhcp;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
