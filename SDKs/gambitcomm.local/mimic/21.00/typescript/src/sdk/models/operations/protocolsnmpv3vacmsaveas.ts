import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolSnmpv3VacmSaveasPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=filename" })
  filename: string;
}


export class ProtocolSnmpv3VacmSaveasRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolSnmpv3VacmSaveasPathParams;
}


export class ProtocolSnmpv3VacmSaveasResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolSnmpv3VacmSaveas200ApplicationJsonStrings?: string[];
}
