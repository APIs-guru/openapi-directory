import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolSnmpv3GetContextEngineidPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolSnmpv3GetContextEngineidRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolSnmpv3GetContextEngineidPathParams;
}


export class ProtocolSnmpv3GetContextEngineidResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolSnmpv3GetContextEngineid200ApplicationJsonString?: string;
}
