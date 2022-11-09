import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeBatchInferenceJobXAmzTargetEnum {
    AmazonPersonalizeDescribeBatchInferenceJob = "AmazonPersonalize.DescribeBatchInferenceJob"
}
export declare class DescribeBatchInferenceJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeBatchInferenceJobXAmzTargetEnum;
}
export declare class DescribeBatchInferenceJobRequest extends SpeakeasyBase {
    headers: DescribeBatchInferenceJobHeaders;
    request: shared.DescribeBatchInferenceJobRequest;
}
export declare class DescribeBatchInferenceJobResponse extends SpeakeasyBase {
    contentType: string;
    describeBatchInferenceJobResponse?: shared.DescribeBatchInferenceJobResponse;
    invalidInputException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
