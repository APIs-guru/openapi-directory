import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeExportTasksXAmzTargetEnum {
    Logs20140328DescribeExportTasks = "Logs_20140328.DescribeExportTasks"
}
export declare class DescribeExportTasksHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeExportTasksXAmzTargetEnum;
}
export declare class DescribeExportTasksRequest extends SpeakeasyBase {
    headers: DescribeExportTasksHeaders;
    request: shared.DescribeExportTasksRequest;
}
export declare class DescribeExportTasksResponse extends SpeakeasyBase {
    contentType: string;
    describeExportTasksResponse?: shared.DescribeExportTasksResponse;
    invalidParameterException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
