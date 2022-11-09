import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolSnmpv3UserClearPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolSnmpv3UserClearRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolSnmpv3UserClearPathParams;
}


export class ProtocolSnmpv3UserClearResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolSnmpv3UserClear200ApplicationJsonString?: string;
}
