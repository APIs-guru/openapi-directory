import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeSolutionXAmzTargetEnum {
    AmazonPersonalizeDescribeSolution = "AmazonPersonalize.DescribeSolution"
}
export declare class DescribeSolutionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeSolutionXAmzTargetEnum;
}
export declare class DescribeSolutionRequest extends SpeakeasyBase {
    headers: DescribeSolutionHeaders;
    request: shared.DescribeSolutionRequest;
}
export declare class DescribeSolutionResponse extends SpeakeasyBase {
    contentType: string;
    describeSolutionResponse?: shared.DescribeSolutionResponse;
    invalidInputException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
