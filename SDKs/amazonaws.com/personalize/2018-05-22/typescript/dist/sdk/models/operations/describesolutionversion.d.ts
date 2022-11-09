import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeSolutionVersionXAmzTargetEnum {
    AmazonPersonalizeDescribeSolutionVersion = "AmazonPersonalize.DescribeSolutionVersion"
}
export declare class DescribeSolutionVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeSolutionVersionXAmzTargetEnum;
}
export declare class DescribeSolutionVersionRequest extends SpeakeasyBase {
    headers: DescribeSolutionVersionHeaders;
    request: shared.DescribeSolutionVersionRequest;
}
export declare class DescribeSolutionVersionResponse extends SpeakeasyBase {
    contentType: string;
    describeSolutionVersionResponse?: shared.DescribeSolutionVersionResponse;
    invalidInputException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
