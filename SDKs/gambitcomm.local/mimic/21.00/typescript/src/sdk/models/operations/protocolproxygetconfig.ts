import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProtocolProxyGetConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolProxyGetConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolProxyGetConfigPathParams;
}


export class ProtocolProxyGetConfigResponse extends SpeakeasyBase {
  @Metadata()
  configProxy?: shared.ConfigProxy;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
