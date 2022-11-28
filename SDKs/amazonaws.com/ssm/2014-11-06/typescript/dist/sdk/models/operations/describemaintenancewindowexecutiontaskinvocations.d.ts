import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeMaintenanceWindowExecutionTaskInvocationsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeMaintenanceWindowExecutionTaskInvocationsXAmzTargetEnum {
    AmazonSsmDescribeMaintenanceWindowExecutionTaskInvocations = "AmazonSSM.DescribeMaintenanceWindowExecutionTaskInvocations"
}
export declare class DescribeMaintenanceWindowExecutionTaskInvocationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeMaintenanceWindowExecutionTaskInvocationsXAmzTargetEnum;
}
export declare class DescribeMaintenanceWindowExecutionTaskInvocationsRequest extends SpeakeasyBase {
    queryParams: DescribeMaintenanceWindowExecutionTaskInvocationsQueryParams;
    headers: DescribeMaintenanceWindowExecutionTaskInvocationsHeaders;
    request: shared.DescribeMaintenanceWindowExecutionTaskInvocationsRequest;
}
export declare class DescribeMaintenanceWindowExecutionTaskInvocationsResponse extends SpeakeasyBase {
    contentType: string;
    describeMaintenanceWindowExecutionTaskInvocationsResult?: shared.DescribeMaintenanceWindowExecutionTaskInvocationsResult;
    doesNotExistException?: any;
    internalServerError?: any;
    statusCode: number;
}
