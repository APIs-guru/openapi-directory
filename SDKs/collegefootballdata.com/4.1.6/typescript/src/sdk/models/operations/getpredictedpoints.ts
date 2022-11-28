import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPredictedPointsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=distance" })
  distance: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=down" })
  down: number;
}


export class GetPredictedPointsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPredictedPointsQueryParams;
}


export class GetPredictedPointsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.PredictedPoints })
  predictedPoints?: shared.PredictedPoints[];

  @SpeakeasyMetadata()
  statusCode: number;
}
