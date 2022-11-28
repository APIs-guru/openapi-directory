import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetEnableLoggingActionEnum {
    EnableLogging = "EnableLogging"
}
export declare enum GetEnableLoggingVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetEnableLoggingQueryParams extends SpeakeasyBase {
    action: GetEnableLoggingActionEnum;
    bucketName: string;
    clusterIdentifier: string;
    s3KeyPrefix?: string;
    version: GetEnableLoggingVersionEnum;
}
export declare class GetEnableLoggingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetEnableLoggingRequest extends SpeakeasyBase {
    queryParams: GetEnableLoggingQueryParams;
    headers: GetEnableLoggingHeaders;
}
export declare class GetEnableLoggingResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
