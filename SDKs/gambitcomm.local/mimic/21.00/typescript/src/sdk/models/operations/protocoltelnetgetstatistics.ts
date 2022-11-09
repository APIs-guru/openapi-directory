import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolTelnetGetStatisticsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolTelnetGetStatisticsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolTelnetGetStatisticsPathParams;
}


export class ProtocolTelnetGetStatisticsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolTelnetGetStatistics200ApplicationJsonInt32Integers?: number[];
}
