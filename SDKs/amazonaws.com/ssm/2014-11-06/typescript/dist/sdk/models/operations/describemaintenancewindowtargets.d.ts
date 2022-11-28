import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeMaintenanceWindowTargetsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeMaintenanceWindowTargetsXAmzTargetEnum {
    AmazonSsmDescribeMaintenanceWindowTargets = "AmazonSSM.DescribeMaintenanceWindowTargets"
}
export declare class DescribeMaintenanceWindowTargetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeMaintenanceWindowTargetsXAmzTargetEnum;
}
export declare class DescribeMaintenanceWindowTargetsRequest extends SpeakeasyBase {
    queryParams: DescribeMaintenanceWindowTargetsQueryParams;
    headers: DescribeMaintenanceWindowTargetsHeaders;
    request: shared.DescribeMaintenanceWindowTargetsRequest;
}
export declare class DescribeMaintenanceWindowTargetsResponse extends SpeakeasyBase {
    contentType: string;
    describeMaintenanceWindowTargetsResult?: shared.DescribeMaintenanceWindowTargetsResult;
    doesNotExistException?: any;
    internalServerError?: any;
    statusCode: number;
}
