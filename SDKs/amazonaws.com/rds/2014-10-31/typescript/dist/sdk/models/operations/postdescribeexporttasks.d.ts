import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeExportTasksActionEnum {
    DescribeExportTasks = "DescribeExportTasks"
}
export declare enum PostDescribeExportTasksVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostDescribeExportTasksQueryParams extends SpeakeasyBase {
    action: PostDescribeExportTasksActionEnum;
    marker?: string;
    maxRecords?: string;
    version: PostDescribeExportTasksVersionEnum;
}
export declare class PostDescribeExportTasksHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeExportTasksRequest extends SpeakeasyBase {
    queryParams: PostDescribeExportTasksQueryParams;
    headers: PostDescribeExportTasksHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeExportTasksResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
