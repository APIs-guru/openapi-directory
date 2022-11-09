import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolWebGetStatisticsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolWebGetStatisticsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolWebGetStatisticsPathParams;
}


export class ProtocolWebGetStatisticsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolWebGetStatistics200ApplicationJsonInt32Integers?: number[];
}
