import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostEnableLoggingActionEnum {
    EnableLogging = "EnableLogging"
}
export declare enum PostEnableLoggingVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostEnableLoggingQueryParams extends SpeakeasyBase {
    action: PostEnableLoggingActionEnum;
    version: PostEnableLoggingVersionEnum;
}
export declare class PostEnableLoggingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostEnableLoggingRequest extends SpeakeasyBase {
    queryParams: PostEnableLoggingQueryParams;
    headers: PostEnableLoggingHeaders;
    request?: Uint8Array;
}
export declare class PostEnableLoggingResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
