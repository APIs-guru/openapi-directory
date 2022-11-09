import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolSnmpv3ViewClearPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolSnmpv3ViewClearRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolSnmpv3ViewClearPathParams;
}


export class ProtocolSnmpv3ViewClearResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolSnmpv3ViewClear200ApplicationJsonString?: string;
}
