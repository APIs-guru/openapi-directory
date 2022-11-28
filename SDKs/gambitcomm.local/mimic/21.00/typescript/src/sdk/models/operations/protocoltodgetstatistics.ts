import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtocolTodGetStatisticsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolTodGetStatisticsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolTodGetStatisticsPathParams;
}


export class ProtocolTodGetStatisticsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolTodGetStatistics200ApplicationJsonInt32Integers?: number[];
}
