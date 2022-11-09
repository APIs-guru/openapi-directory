import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProtocolSflowGetConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolSflowGetConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolSflowGetConfigPathParams;
}


export class ProtocolSflowGetConfigResponse extends SpeakeasyBase {
  @Metadata()
  configSflow?: shared.ConfigSflow;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
