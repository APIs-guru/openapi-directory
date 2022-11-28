import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeMaintenanceWindowsForTargetQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeMaintenanceWindowsForTargetXAmzTargetEnum {
    AmazonSsmDescribeMaintenanceWindowsForTarget = "AmazonSSM.DescribeMaintenanceWindowsForTarget"
}
export declare class DescribeMaintenanceWindowsForTargetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeMaintenanceWindowsForTargetXAmzTargetEnum;
}
export declare class DescribeMaintenanceWindowsForTargetRequest extends SpeakeasyBase {
    queryParams: DescribeMaintenanceWindowsForTargetQueryParams;
    headers: DescribeMaintenanceWindowsForTargetHeaders;
    request: shared.DescribeMaintenanceWindowsForTargetRequest;
}
export declare class DescribeMaintenanceWindowsForTargetResponse extends SpeakeasyBase {
    contentType: string;
    describeMaintenanceWindowsForTargetResult?: shared.DescribeMaintenanceWindowsForTargetResult;
    internalServerError?: any;
    statusCode: number;
}
