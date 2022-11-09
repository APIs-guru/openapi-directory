import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolTelnetConnectionSignalPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=connectionID" })
  connectionId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=signalName" })
  signalName: string;
}


export class ProtocolTelnetConnectionSignalRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolTelnetConnectionSignalPathParams;
}


export class ProtocolTelnetConnectionSignalResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolTelnetConnectionSignal200ApplicationJsonStrings?: string[];
}
