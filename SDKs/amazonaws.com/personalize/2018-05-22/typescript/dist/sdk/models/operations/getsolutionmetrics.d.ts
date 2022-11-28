import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetSolutionMetricsXAmzTargetEnum {
    AmazonPersonalizeGetSolutionMetrics = "AmazonPersonalize.GetSolutionMetrics"
}
export declare class GetSolutionMetricsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetSolutionMetricsXAmzTargetEnum;
}
export declare class GetSolutionMetricsRequest extends SpeakeasyBase {
    headers: GetSolutionMetricsHeaders;
    request: shared.GetSolutionMetricsRequest;
}
export declare class GetSolutionMetricsResponse extends SpeakeasyBase {
    contentType: string;
    getSolutionMetricsResponse?: shared.GetSolutionMetricsResponse;
    invalidInputException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
