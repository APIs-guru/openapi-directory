import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolSnmpv3AccessAddPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=contextMatch" })
  contextMatch: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=groupName" })
  groupName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=notifyView" })
  notifyView: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=prefix" })
  prefix: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=readView" })
  readView: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=securityLevel" })
  securityLevel: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=securityModel" })
  securityModel: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=writeView" })
  writeView: string;
}


export class ProtocolSnmpv3AccessAddRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolSnmpv3AccessAddPathParams;
}


export class ProtocolSnmpv3AccessAddResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolSnmpv3AccessAdd200ApplicationJsonString?: string;
}
