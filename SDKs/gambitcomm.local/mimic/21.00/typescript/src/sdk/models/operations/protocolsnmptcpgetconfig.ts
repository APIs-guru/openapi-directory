import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProtocolSnmptcpGetConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolSnmptcpGetConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolSnmptcpGetConfigPathParams;
}


export class ProtocolSnmptcpGetConfigResponse extends SpeakeasyBase {
  @Metadata()
  configSnmptcp?: shared.ConfigSnmptcp;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
