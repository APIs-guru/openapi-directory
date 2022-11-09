import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetPredictedPointsQueryParams extends SpeakeasyBase {
    distance: number;
    down: number;
}
export declare class GetPredictedPointsRequest extends SpeakeasyBase {
    queryParams: GetPredictedPointsQueryParams;
}
export declare class GetPredictedPointsResponse extends SpeakeasyBase {
    contentType: string;
    predictedPoints?: shared.PredictedPoints[];
    statusCode: number;
}
