import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeMaintenanceWindowExecutionTasksQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeMaintenanceWindowExecutionTasksXAmzTargetEnum {
    AmazonSsmDescribeMaintenanceWindowExecutionTasks = "AmazonSSM.DescribeMaintenanceWindowExecutionTasks"
}
export declare class DescribeMaintenanceWindowExecutionTasksHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeMaintenanceWindowExecutionTasksXAmzTargetEnum;
}
export declare class DescribeMaintenanceWindowExecutionTasksRequest extends SpeakeasyBase {
    queryParams: DescribeMaintenanceWindowExecutionTasksQueryParams;
    headers: DescribeMaintenanceWindowExecutionTasksHeaders;
    request: shared.DescribeMaintenanceWindowExecutionTasksRequest;
}
export declare class DescribeMaintenanceWindowExecutionTasksResponse extends SpeakeasyBase {
    contentType: string;
    describeMaintenanceWindowExecutionTasksResult?: shared.DescribeMaintenanceWindowExecutionTasksResult;
    doesNotExistException?: any;
    internalServerError?: any;
    statusCode: number;
}
