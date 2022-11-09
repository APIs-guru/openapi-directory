import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeSubnetGroupsXAmzTargetEnum {
    AmazonMemoryDbDescribeSubnetGroups = "AmazonMemoryDB.DescribeSubnetGroups"
}
export declare class DescribeSubnetGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeSubnetGroupsXAmzTargetEnum;
}
export declare class DescribeSubnetGroupsRequest extends SpeakeasyBase {
    headers: DescribeSubnetGroupsHeaders;
    request: shared.DescribeSubnetGroupsRequest;
}
export declare class DescribeSubnetGroupsResponse extends SpeakeasyBase {
    contentType: string;
    describeSubnetGroupsResponse?: shared.DescribeSubnetGroupsResponse;
    serviceLinkedRoleNotFoundFault?: any;
    statusCode: number;
    subnetGroupNotFoundFault?: any;
}
