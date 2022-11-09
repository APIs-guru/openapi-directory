import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetStartExportTaskActionEnum {
    StartExportTask = "StartExportTask"
}
export declare enum GetStartExportTaskVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GetStartExportTaskQueryParams extends SpeakeasyBase {
    action: GetStartExportTaskActionEnum;
    exportOnly?: string[];
    exportTaskIdentifier: string;
    iamRoleArn: string;
    kmsKeyId: string;
    s3BucketName: string;
    s3Prefix?: string;
    sourceArn: string;
    version: GetStartExportTaskVersionEnum;
}
export declare class GetStartExportTaskHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetStartExportTaskRequest extends SpeakeasyBase {
    queryParams: GetStartExportTaskQueryParams;
    headers: GetStartExportTaskHeaders;
}
export declare class GetStartExportTaskResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
