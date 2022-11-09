import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolTelnetServerGetKeymapPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolTelnetServerGetKeymapRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolTelnetServerGetKeymapPathParams;
}


export class ProtocolTelnetServerGetKeymapResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolTelnetServerGetKeymap200ApplicationJsonStrings?: string[];
}
