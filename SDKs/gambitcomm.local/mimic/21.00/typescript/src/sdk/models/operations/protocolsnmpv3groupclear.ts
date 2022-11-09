import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolSnmpv3GroupClearPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolSnmpv3GroupClearRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolSnmpv3GroupClearPathParams;
}


export class ProtocolSnmpv3GroupClearResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolSnmpv3GroupClear200ApplicationJsonString?: string;
}
