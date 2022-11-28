import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreateScheduledActionActionEnum {
    CreateScheduledAction = "CreateScheduledAction"
}
export declare enum PostCreateScheduledActionVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostCreateScheduledActionQueryParams extends SpeakeasyBase {
    action: PostCreateScheduledActionActionEnum;
    version: PostCreateScheduledActionVersionEnum;
}
export declare class PostCreateScheduledActionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateScheduledActionRequest extends SpeakeasyBase {
    queryParams: PostCreateScheduledActionQueryParams;
    headers: PostCreateScheduledActionHeaders;
    request?: Uint8Array;
}
export declare class PostCreateScheduledActionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
