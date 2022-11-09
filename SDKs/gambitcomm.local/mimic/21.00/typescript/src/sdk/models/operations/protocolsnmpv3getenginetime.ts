import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolSnmpv3GetEnginetimePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolSnmpv3GetEnginetimeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolSnmpv3GetEnginetimePathParams;
}


export class ProtocolSnmpv3GetEnginetimeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolSnmpv3GetEnginetime200ApplicationJsonInt32Integer?: number;
}
