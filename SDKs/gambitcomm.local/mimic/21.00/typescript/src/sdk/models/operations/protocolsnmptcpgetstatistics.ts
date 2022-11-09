import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolSnmptcpGetStatisticsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolSnmptcpGetStatisticsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolSnmptcpGetStatisticsPathParams;
}


export class ProtocolSnmptcpGetStatisticsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolSnmptcpGetStatistics200ApplicationJsonInt32Integers?: number[];
}
