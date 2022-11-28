import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetCancelExportTaskActionEnum {
    CancelExportTask = "CancelExportTask"
}
export declare enum GetCancelExportTaskVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GetCancelExportTaskQueryParams extends SpeakeasyBase {
    action: GetCancelExportTaskActionEnum;
    exportTaskIdentifier: string;
    version: GetCancelExportTaskVersionEnum;
}
export declare class GetCancelExportTaskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCancelExportTaskRequest extends SpeakeasyBase {
    queryParams: GetCancelExportTaskQueryParams;
    headers: GetCancelExportTaskHeaders;
}
export declare class GetCancelExportTaskResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
