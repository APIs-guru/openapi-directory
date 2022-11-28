import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtocolSnmptcpGetStatisticsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolSnmptcpGetStatisticsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolSnmptcpGetStatisticsPathParams;
}


export class ProtocolSnmptcpGetStatisticsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolSnmptcpGetStatistics200ApplicationJsonInt32Integers?: number[];
}
