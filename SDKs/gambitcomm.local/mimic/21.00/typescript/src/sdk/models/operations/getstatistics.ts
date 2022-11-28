import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetStatisticsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=agentNum" })
  agentNum: number;
}


export class GetStatisticsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetStatisticsPathParams;
}


export class GetStatisticsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getStatistics200ApplicationJsonInt32Integers?: number[];
}
