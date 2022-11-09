import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolSnmpv3UserListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolSnmpv3UserListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolSnmpv3UserListPathParams;
}


export class ProtocolSnmpv3UserListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolSnmpv3UserList200ApplicationJsonStrings?: string[];
}
