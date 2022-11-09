import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProtocolCoapGetConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolCoapGetConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolCoapGetConfigPathParams;
}


export class ProtocolCoapGetConfigResponse extends SpeakeasyBase {
  @Metadata()
  configCoap?: shared.ConfigCoap;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
