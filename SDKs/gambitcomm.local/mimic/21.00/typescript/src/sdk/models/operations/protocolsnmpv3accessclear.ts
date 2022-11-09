import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolSnmpv3AccessClearPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolSnmpv3AccessClearRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolSnmpv3AccessClearPathParams;
}


export class ProtocolSnmpv3AccessClearResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolSnmpv3AccessClear200ApplicationJsonString?: string;
}
