import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeMaintenanceWindowScheduleQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum DescribeMaintenanceWindowScheduleXAmzTargetEnum {
    AmazonSsmDescribeMaintenanceWindowSchedule = "AmazonSSM.DescribeMaintenanceWindowSchedule"
}
export declare class DescribeMaintenanceWindowScheduleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeMaintenanceWindowScheduleXAmzTargetEnum;
}
export declare class DescribeMaintenanceWindowScheduleRequest extends SpeakeasyBase {
    queryParams: DescribeMaintenanceWindowScheduleQueryParams;
    headers: DescribeMaintenanceWindowScheduleHeaders;
    request: shared.DescribeMaintenanceWindowScheduleRequest;
}
export declare class DescribeMaintenanceWindowScheduleResponse extends SpeakeasyBase {
    contentType: string;
    describeMaintenanceWindowScheduleResult?: shared.DescribeMaintenanceWindowScheduleResult;
    doesNotExistException?: any;
    internalServerError?: any;
    statusCode: number;
}
