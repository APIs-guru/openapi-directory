import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtocolProxyGetStatisticsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolProxyGetStatisticsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolProxyGetStatisticsPathParams;
}


export class ProtocolProxyGetStatisticsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolProxyGetStatistics200ApplicationJsonInt32Integers?: number[];
}
