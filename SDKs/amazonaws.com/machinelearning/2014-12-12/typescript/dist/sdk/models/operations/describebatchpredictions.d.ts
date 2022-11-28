import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeBatchPredictionsQueryParams extends SpeakeasyBase {
    limit?: string;
    nextToken?: string;
}
export declare enum DescribeBatchPredictionsXAmzTargetEnum {
    AmazonMl20141212DescribeBatchPredictions = "AmazonML_20141212.DescribeBatchPredictions"
}
export declare class DescribeBatchPredictionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeBatchPredictionsXAmzTargetEnum;
}
export declare class DescribeBatchPredictionsRequest extends SpeakeasyBase {
    queryParams: DescribeBatchPredictionsQueryParams;
    headers: DescribeBatchPredictionsHeaders;
    request: shared.DescribeBatchPredictionsInput;
}
export declare class DescribeBatchPredictionsResponse extends SpeakeasyBase {
    contentType: string;
    describeBatchPredictionsOutput?: shared.DescribeBatchPredictionsOutput;
    internalServerException?: any;
    invalidInputException?: any;
    statusCode: number;
}
