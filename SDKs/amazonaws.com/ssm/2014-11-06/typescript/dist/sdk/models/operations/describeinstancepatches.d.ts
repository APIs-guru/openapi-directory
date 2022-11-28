import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeInstancePatchesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeInstancePatchesXAmzTargetEnum {
    AmazonSsmDescribeInstancePatches = "AmazonSSM.DescribeInstancePatches"
}
export declare class DescribeInstancePatchesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeInstancePatchesXAmzTargetEnum;
}
export declare class DescribeInstancePatchesRequest extends SpeakeasyBase {
    queryParams: DescribeInstancePatchesQueryParams;
    headers: DescribeInstancePatchesHeaders;
    request: shared.DescribeInstancePatchesRequest;
}
export declare class DescribeInstancePatchesResponse extends SpeakeasyBase {
    contentType: string;
    describeInstancePatchesResult?: shared.DescribeInstancePatchesResult;
    internalServerError?: any;
    invalidFilter?: any;
    invalidInstanceId?: any;
    invalidNextToken?: any;
    statusCode: number;
}
