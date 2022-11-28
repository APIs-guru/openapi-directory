import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeAcLsXAmzTargetEnum {
    AmazonMemoryDbDescribeAcLs = "AmazonMemoryDB.DescribeACLs"
}
export declare class DescribeAcLsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeAcLsXAmzTargetEnum;
}
export declare class DescribeAcLsRequest extends SpeakeasyBase {
    headers: DescribeAcLsHeaders;
    request: shared.DescribeAcLsRequest;
}
export declare class DescribeAcLsResponse extends SpeakeasyBase {
    aclNotFoundFault?: any;
    contentType: string;
    describeAcLsResponse?: shared.DescribeAcLsResponse;
    invalidParameterCombinationException?: any;
    statusCode: number;
}
