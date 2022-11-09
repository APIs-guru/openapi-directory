import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ProtocolSnmpv3GetConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolSnmpv3GetConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolSnmpv3GetConfigPathParams;
}


export class ProtocolSnmpv3GetConfigResponse extends SpeakeasyBase {
  @Metadata()
  configSnmPv3?: shared.ConfigSnmPv3;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
