import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolIpmiGetStatisticsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolIpmiGetStatisticsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolIpmiGetStatisticsPathParams;
}


export class ProtocolIpmiGetStatisticsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolIpmiGetStatistics200ApplicationJsonInt32Integers?: number[];
}
