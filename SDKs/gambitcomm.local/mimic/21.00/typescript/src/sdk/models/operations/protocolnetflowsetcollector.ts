import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolNetflowSetCollectorPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=collectorIP" })
  collectorIp: string;
}


export class ProtocolNetflowSetCollectorRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolNetflowSetCollectorPathParams;
}


export class ProtocolNetflowSetCollectorResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolNetflowSetCollector200ApplicationJsonString?: string;
}
