import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolNetflowChangeDfsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=interval" })
  interval: number;
}


export class ProtocolNetflowChangeDfsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolNetflowChangeDfsPathParams;
}


export class ProtocolNetflowChangeDfsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolNetflowChangeDfs200ApplicationJsonString?: string;
}
