import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ListTagsForResourceXAmzTargetEnum {
    AwsStepFunctionsListTagsForResource = "AWSStepFunctions.ListTagsForResource"
}
export declare class ListTagsForResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTagsForResourceXAmzTargetEnum;
}
export declare class ListTagsForResourceRequest extends SpeakeasyBase {
    headers: ListTagsForResourceHeaders;
    request: shared.ListTagsForResourceInput;
}
export declare class ListTagsForResourceResponse extends SpeakeasyBase {
    contentType: string;
    invalidArn?: any;
    listTagsForResourceOutput?: shared.ListTagsForResourceOutput;
    resourceNotFound?: any;
    statusCode: number;
}
