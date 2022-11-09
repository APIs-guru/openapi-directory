import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProtocolWebGetConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolWebGetConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolWebGetConfigPathParams;
}


export class ProtocolWebGetConfigResponse extends SpeakeasyBase {
  @Metadata()
  configWeb?: shared.ConfigWeb;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
