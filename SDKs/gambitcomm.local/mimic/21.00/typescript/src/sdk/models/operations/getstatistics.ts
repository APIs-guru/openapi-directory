import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetStatisticsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class GetStatisticsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetStatisticsPathParams;
}


export class GetStatisticsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getStatistics200ApplicationJsonInt32Integers?: number[];
}
