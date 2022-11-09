import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolNetflowHaltPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolNetflowHaltRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolNetflowHaltPathParams;
}


export class ProtocolNetflowHaltResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolNetflowHalt200ApplicationJsonString?: string;
}
