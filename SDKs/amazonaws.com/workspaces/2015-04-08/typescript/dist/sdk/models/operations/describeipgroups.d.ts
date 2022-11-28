import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeIpGroupsXAmzTargetEnum {
    WorkspacesServiceDescribeIpGroups = "WorkspacesService.DescribeIpGroups"
}
export declare class DescribeIpGroupsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeIpGroupsXAmzTargetEnum;
}
export declare class DescribeIpGroupsRequest extends SpeakeasyBase {
    headers: DescribeIpGroupsHeaders;
    request: shared.DescribeIpGroupsRequest;
}
export declare class DescribeIpGroupsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    describeIpGroupsResult?: shared.DescribeIpGroupsResult;
    invalidParameterValuesException?: any;
    statusCode: number;
}
