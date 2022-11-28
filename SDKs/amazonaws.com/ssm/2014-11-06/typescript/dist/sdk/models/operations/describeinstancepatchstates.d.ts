import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeInstancePatchStatesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeInstancePatchStatesXAmzTargetEnum {
    AmazonSsmDescribeInstancePatchStates = "AmazonSSM.DescribeInstancePatchStates"
}
export declare class DescribeInstancePatchStatesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeInstancePatchStatesXAmzTargetEnum;
}
export declare class DescribeInstancePatchStatesRequest extends SpeakeasyBase {
    queryParams: DescribeInstancePatchStatesQueryParams;
    headers: DescribeInstancePatchStatesHeaders;
    request: shared.DescribeInstancePatchStatesRequest;
}
export declare class DescribeInstancePatchStatesResponse extends SpeakeasyBase {
    contentType: string;
    describeInstancePatchStatesResult?: shared.DescribeInstancePatchStatesResult;
    internalServerError?: any;
    invalidNextToken?: any;
    statusCode: number;
}
