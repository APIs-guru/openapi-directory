import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProtocolSyslogGetStatisticsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolSyslogGetStatisticsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ProtocolSyslogGetStatisticsPathParams;
}


export class ProtocolSyslogGetStatisticsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  protocolSyslogGetStatistics200ApplicationJsonInt32Integers?: number[];
}
