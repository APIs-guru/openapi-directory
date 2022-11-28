import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeTagsXAmzTargetEnum {
    AmazonMl20141212DescribeTags = "AmazonML_20141212.DescribeTags"
}
export declare class DescribeTagsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeTagsXAmzTargetEnum;
}
export declare class DescribeTagsRequest extends SpeakeasyBase {
    headers: DescribeTagsHeaders;
    request: shared.DescribeTagsInput;
}
export declare class DescribeTagsResponse extends SpeakeasyBase {
    contentType: string;
    describeTagsOutput?: shared.DescribeTagsOutput;
    internalServerException?: any;
    invalidInputException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
