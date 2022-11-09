import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolSnmpv3UserDelPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=userName" })
  userName: string;
}


export class ProtocolSnmpv3UserDelRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolSnmpv3UserDelPathParams;
}


export class ProtocolSnmpv3UserDelResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolSnmpv3UserDel200ApplicationJsonString?: string;
}
