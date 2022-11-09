import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProtocolIpmiGetConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolIpmiGetConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolIpmiGetConfigPathParams;
}


export class ProtocolIpmiGetConfigResponse extends SpeakeasyBase {
  @Metadata()
  configIpmi?: shared.ConfigIpmi;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
