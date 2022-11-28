import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtocolSnmpv3AccessAddPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=contextMatch" })
  contextMatch: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=groupName" })
  groupName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=notifyView" })
  notifyView: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=prefix" })
  prefix: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=readView" })
  readView: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=securityLevel" })
  securityLevel: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=securityModel" })
  securityModel: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=writeView" })
  writeView: string;
}


export class ProtocolSnmpv3AccessAddRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolSnmpv3AccessAddPathParams;
}


export class ProtocolSnmpv3AccessAddResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolSnmpv3AccessAdd200ApplicationJsonString?: string;
}
