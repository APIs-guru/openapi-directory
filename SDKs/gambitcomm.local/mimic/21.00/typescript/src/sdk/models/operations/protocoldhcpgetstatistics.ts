import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtocolDhcpGetStatisticsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolDhcpGetStatisticsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolDhcpGetStatisticsPathParams;
}


export class ProtocolDhcpGetStatisticsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolDhcpGetStatistics200ApplicationJsonInt32Integers?: number[];
}
