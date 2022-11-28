import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtocolSnmpv3GetEngineidPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolSnmpv3GetEngineidRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolSnmpv3GetEngineidPathParams;
}


export class ProtocolSnmpv3GetEngineidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolSnmpv3GetEngineid200ApplicationJsonString?: string;
}
