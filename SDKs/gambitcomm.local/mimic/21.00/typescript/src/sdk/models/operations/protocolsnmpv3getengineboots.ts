import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolSnmpv3GetEnginebootsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolSnmpv3GetEnginebootsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolSnmpv3GetEnginebootsPathParams;
}


export class ProtocolSnmpv3GetEnginebootsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolSnmpv3GetEngineboots200ApplicationJsonInt32Integer?: number;
}
