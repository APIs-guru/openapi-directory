import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolSnmpv3AccessDelPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accessName" })
  accessName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolSnmpv3AccessDelRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolSnmpv3AccessDelPathParams;
}


export class ProtocolSnmpv3AccessDelResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolSnmpv3AccessDel200ApplicationJsonString?: string;
}
