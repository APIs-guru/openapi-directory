import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtocolSnmpv3UserDelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userName" })
  userName: string;
}


export class ProtocolSnmpv3UserDelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolSnmpv3UserDelPathParams;
}


export class ProtocolSnmpv3UserDelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolSnmpv3UserDel200ApplicationJsonString?: string;
}
