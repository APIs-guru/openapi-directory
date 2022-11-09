import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolTodGetStatisticsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolTodGetStatisticsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolTodGetStatisticsPathParams;
}


export class ProtocolTodGetStatisticsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolTodGetStatistics200ApplicationJsonInt32Integers?: number[];
}
