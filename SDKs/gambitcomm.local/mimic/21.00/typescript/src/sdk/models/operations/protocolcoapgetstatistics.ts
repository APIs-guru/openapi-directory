import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtocolCoapGetStatisticsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolCoapGetStatisticsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolCoapGetStatisticsPathParams;
}


export class ProtocolCoapGetStatisticsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolCoapGetStatistics200ApplicationJsonInt32Integers?: number[];
}
