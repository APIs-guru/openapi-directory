import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProtocolTelnetGetConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolTelnetGetConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolTelnetGetConfigPathParams;
}


export class ProtocolTelnetGetConfigResponse extends SpeakeasyBase {
  @Metadata()
  configTelnet?: shared.ConfigTelnet;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
