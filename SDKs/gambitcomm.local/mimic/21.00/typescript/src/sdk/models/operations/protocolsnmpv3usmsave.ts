import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolSnmpv3UsmSavePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolSnmpv3UsmSaveRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolSnmpv3UsmSavePathParams;
}


export class ProtocolSnmpv3UsmSaveResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolSnmpv3UsmSave200ApplicationJsonStrings?: string[];
}
