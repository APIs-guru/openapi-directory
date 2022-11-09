import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolSyslogGetStatisticsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolSyslogGetStatisticsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolSyslogGetStatisticsPathParams;
}


export class ProtocolSyslogGetStatisticsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolSyslogGetStatistics200ApplicationJsonInt32Integers?: number[];
}
