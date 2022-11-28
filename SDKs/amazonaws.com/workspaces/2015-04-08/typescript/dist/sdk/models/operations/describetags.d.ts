import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeTagsXAmzTargetEnum {
    WorkspacesServiceDescribeTags = "WorkspacesService.DescribeTags"
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
    request: shared.DescribeTagsRequest;
}
export declare class DescribeTagsResponse extends SpeakeasyBase {
    contentType: string;
    describeTagsResult?: shared.DescribeTagsResult;
    resourceNotFoundException?: any;
    statusCode: number;
}
