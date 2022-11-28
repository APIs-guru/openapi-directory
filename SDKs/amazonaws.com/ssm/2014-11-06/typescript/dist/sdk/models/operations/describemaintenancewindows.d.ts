import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeMaintenanceWindowsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeMaintenanceWindowsXAmzTargetEnum {
    AmazonSsmDescribeMaintenanceWindows = "AmazonSSM.DescribeMaintenanceWindows"
}
export declare class DescribeMaintenanceWindowsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeMaintenanceWindowsXAmzTargetEnum;
}
export declare class DescribeMaintenanceWindowsRequest extends SpeakeasyBase {
    queryParams: DescribeMaintenanceWindowsQueryParams;
    headers: DescribeMaintenanceWindowsHeaders;
    request: shared.DescribeMaintenanceWindowsRequest;
}
export declare class DescribeMaintenanceWindowsResponse extends SpeakeasyBase {
    contentType: string;
    describeMaintenanceWindowsResult?: shared.DescribeMaintenanceWindowsResult;
    internalServerError?: any;
    statusCode: number;
}
