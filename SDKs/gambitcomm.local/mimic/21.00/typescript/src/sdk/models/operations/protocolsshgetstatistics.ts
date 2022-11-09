import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolSshGetStatisticsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolSshGetStatisticsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolSshGetStatisticsPathParams;
}


export class ProtocolSshGetStatisticsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolSshGetStatistics200ApplicationJsonInt32Integers?: number[];
}
