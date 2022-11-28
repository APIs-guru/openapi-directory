import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeMaintenanceWindowTasksQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeMaintenanceWindowTasksXAmzTargetEnum {
    AmazonSsmDescribeMaintenanceWindowTasks = "AmazonSSM.DescribeMaintenanceWindowTasks"
}
export declare class DescribeMaintenanceWindowTasksHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeMaintenanceWindowTasksXAmzTargetEnum;
}
export declare class DescribeMaintenanceWindowTasksRequest extends SpeakeasyBase {
    queryParams: DescribeMaintenanceWindowTasksQueryParams;
    headers: DescribeMaintenanceWindowTasksHeaders;
    request: shared.DescribeMaintenanceWindowTasksRequest;
}
export declare class DescribeMaintenanceWindowTasksResponse extends SpeakeasyBase {
    contentType: string;
    describeMaintenanceWindowTasksResult?: shared.DescribeMaintenanceWindowTasksResult;
    doesNotExistException?: any;
    internalServerError?: any;
    statusCode: number;
}
