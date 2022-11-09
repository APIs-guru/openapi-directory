import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolProxyGetStatisticsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolProxyGetStatisticsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolProxyGetStatisticsPathParams;
}


export class ProtocolProxyGetStatisticsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolProxyGetStatistics200ApplicationJsonInt32Integers?: number[];
}
