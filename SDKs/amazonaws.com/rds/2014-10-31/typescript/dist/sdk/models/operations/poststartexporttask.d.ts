import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostStartExportTaskActionEnum {
    StartExportTask = "StartExportTask"
}
export declare enum PostStartExportTaskVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostStartExportTaskQueryParams extends SpeakeasyBase {
    action: PostStartExportTaskActionEnum;
    version: PostStartExportTaskVersionEnum;
}
export declare class PostStartExportTaskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostStartExportTaskRequest extends SpeakeasyBase {
    queryParams: PostStartExportTaskQueryParams;
    headers: PostStartExportTaskHeaders;
    request?: Uint8Array;
}
export declare class PostStartExportTaskResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
