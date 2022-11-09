import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolSflowGetStatisticsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolSflowGetStatisticsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolSflowGetStatisticsPathParams;
}


export class ProtocolSflowGetStatisticsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolSflowGetStatistics200ApplicationJsonInt32Integers?: number[];
}
