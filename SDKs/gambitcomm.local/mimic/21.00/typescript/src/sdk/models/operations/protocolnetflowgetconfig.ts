import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProtocolNetflowGetConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolNetflowGetConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolNetflowGetConfigPathParams;
}


export class ProtocolNetflowGetConfigResponse extends SpeakeasyBase {
  @Metadata()
  configNetflow?: shared.ConfigNetflow;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
