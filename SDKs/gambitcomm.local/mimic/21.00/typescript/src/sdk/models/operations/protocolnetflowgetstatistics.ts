import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtocolNetflowGetStatisticsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolNetflowGetStatisticsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolNetflowGetStatisticsPathParams;
}


export class ProtocolNetflowGetStatisticsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolNetflowGetStatistics200ApplicationJsonInt32Integers?: number[];
}
