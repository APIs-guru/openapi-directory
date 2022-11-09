import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolSnmpv3UsmSaveasPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=filename" })
  filename: string;
}


export class ProtocolSnmpv3UsmSaveasRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolSnmpv3UsmSaveasPathParams;
}


export class ProtocolSnmpv3UsmSaveasResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolSnmpv3UsmSaveas200ApplicationJsonStrings?: string[];
}
