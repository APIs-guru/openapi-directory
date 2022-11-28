import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeMaintenanceWindowExecutionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeMaintenanceWindowExecutionsXAmzTargetEnum {
    AmazonSsmDescribeMaintenanceWindowExecutions = "AmazonSSM.DescribeMaintenanceWindowExecutions"
}
export declare class DescribeMaintenanceWindowExecutionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeMaintenanceWindowExecutionsXAmzTargetEnum;
}
export declare class DescribeMaintenanceWindowExecutionsRequest extends SpeakeasyBase {
    queryParams: DescribeMaintenanceWindowExecutionsQueryParams;
    headers: DescribeMaintenanceWindowExecutionsHeaders;
    request: shared.DescribeMaintenanceWindowExecutionsRequest;
}
export declare class DescribeMaintenanceWindowExecutionsResponse extends SpeakeasyBase {
    contentType: string;
    describeMaintenanceWindowExecutionsResult?: shared.DescribeMaintenanceWindowExecutionsResult;
    internalServerError?: any;
    statusCode: number;
}
