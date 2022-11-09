import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDisableLoggingActionEnum {
    DisableLogging = "DisableLogging"
}
export declare enum PostDisableLoggingVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostDisableLoggingQueryParams extends SpeakeasyBase {
    action: PostDisableLoggingActionEnum;
    version: PostDisableLoggingVersionEnum;
}
export declare class PostDisableLoggingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDisableLoggingRequest extends SpeakeasyBase {
    queryParams: PostDisableLoggingQueryParams;
    headers: PostDisableLoggingHeaders;
    request?: Uint8Array;
}
export declare class PostDisableLoggingResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
