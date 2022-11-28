import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeInstancePatchStatesForPatchGroupQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeInstancePatchStatesForPatchGroupXAmzTargetEnum {
    AmazonSsmDescribeInstancePatchStatesForPatchGroup = "AmazonSSM.DescribeInstancePatchStatesForPatchGroup"
}
export declare class DescribeInstancePatchStatesForPatchGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeInstancePatchStatesForPatchGroupXAmzTargetEnum;
}
export declare class DescribeInstancePatchStatesForPatchGroupRequest extends SpeakeasyBase {
    queryParams: DescribeInstancePatchStatesForPatchGroupQueryParams;
    headers: DescribeInstancePatchStatesForPatchGroupHeaders;
    request: shared.DescribeInstancePatchStatesForPatchGroupRequest;
}
export declare class DescribeInstancePatchStatesForPatchGroupResponse extends SpeakeasyBase {
    contentType: string;
    describeInstancePatchStatesForPatchGroupResult?: shared.DescribeInstancePatchStatesForPatchGroupResult;
    internalServerError?: any;
    invalidFilter?: any;
    invalidNextToken?: any;
    statusCode: number;
}
