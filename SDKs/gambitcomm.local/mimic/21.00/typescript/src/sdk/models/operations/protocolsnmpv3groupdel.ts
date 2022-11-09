import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolSnmpv3GroupDelPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=groupName" })
  groupName: string;
}


export class ProtocolSnmpv3GroupDelRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolSnmpv3GroupDelPathParams;
}


export class ProtocolSnmpv3GroupDelResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolSnmpv3GroupDel200ApplicationJsonString?: string;
}
