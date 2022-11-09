import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProtocolTftpGetStatisticsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class ProtocolTftpGetStatisticsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ProtocolTftpGetStatisticsPathParams;
}


export class ProtocolTftpGetStatisticsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  protocolTftpGetStatistics200ApplicationJsonInt32Integers?: number[];
}
