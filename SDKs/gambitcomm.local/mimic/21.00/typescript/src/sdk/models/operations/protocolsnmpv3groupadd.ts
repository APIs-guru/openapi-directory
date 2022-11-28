import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtocolSnmpv3GroupAddPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupName" })
  groupName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=securityModel" })
  securityModel: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=securityName" })
  securityName: string;
}


export class ProtocolSnmpv3GroupAddRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolSnmpv3GroupAddPathParams;
}


export class ProtocolSnmpv3GroupAddResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolSnmpv3GroupAdd200ApplicationJsonString?: string;
}
