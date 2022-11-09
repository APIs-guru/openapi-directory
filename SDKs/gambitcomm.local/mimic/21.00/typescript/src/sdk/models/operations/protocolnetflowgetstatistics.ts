import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolNetflowGetStatisticsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolNetflowGetStatisticsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolNetflowGetStatisticsPathParams;
}


export class ProtocolNetflowGetStatisticsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolNetflowGetStatistics200ApplicationJsonInt32Integers?: number[];
}
