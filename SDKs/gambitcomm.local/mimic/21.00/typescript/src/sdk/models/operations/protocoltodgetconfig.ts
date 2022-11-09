import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProtocolTodGetConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolTodGetConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolTodGetConfigPathParams;
}


export class ProtocolTodGetConfigResponse extends SpeakeasyBase {
  @Metadata()
  configTod?: shared.ConfigTod;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
