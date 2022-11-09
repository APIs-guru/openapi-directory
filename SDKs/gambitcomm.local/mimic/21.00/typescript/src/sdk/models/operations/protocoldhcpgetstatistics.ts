import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolDhcpGetStatisticsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolDhcpGetStatisticsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolDhcpGetStatisticsPathParams;
}


export class ProtocolDhcpGetStatisticsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolDhcpGetStatistics200ApplicationJsonInt32Integers?: number[];
}
