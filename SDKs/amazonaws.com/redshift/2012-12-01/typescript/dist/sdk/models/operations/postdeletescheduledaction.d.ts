import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDeleteScheduledActionActionEnum {
    DeleteScheduledAction = "DeleteScheduledAction"
}
export declare enum PostDeleteScheduledActionVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostDeleteScheduledActionQueryParams extends SpeakeasyBase {
    action: PostDeleteScheduledActionActionEnum;
    version: PostDeleteScheduledActionVersionEnum;
}
export declare class PostDeleteScheduledActionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteScheduledActionRequest extends SpeakeasyBase {
    queryParams: PostDeleteScheduledActionQueryParams;
    headers: PostDeleteScheduledActionHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteScheduledActionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
