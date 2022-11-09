import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolSnmpv3AccessListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolSnmpv3AccessListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolSnmpv3AccessListPathParams;
}


export class ProtocolSnmpv3AccessListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolSnmpv3AccessList200ApplicationJsonStrings?: string[];
}
