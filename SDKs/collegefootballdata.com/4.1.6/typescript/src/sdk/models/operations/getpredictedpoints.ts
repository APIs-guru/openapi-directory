import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPredictedPointsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=distance" })
  distance: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=down" })
  down: number;
}


export class GetPredictedPointsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPredictedPointsQueryParams;
}


export class GetPredictedPointsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.PredictedPoints })
  predictedPoints?: shared.PredictedPoints[];

  @Metadata()
  statusCode: number;
}
