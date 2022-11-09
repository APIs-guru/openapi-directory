import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProtocolSshGetConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolSshGetConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolSshGetConfigPathParams;
}


export class ProtocolSshGetConfigResponse extends SpeakeasyBase {
  @Metadata()
  configSsh?: shared.ConfigSsh;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
