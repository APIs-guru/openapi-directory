import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostStopActivityStreamActionEnum {
    StopActivityStream = "StopActivityStream"
}
export declare enum PostStopActivityStreamVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostStopActivityStreamQueryParams extends SpeakeasyBase {
    action: PostStopActivityStreamActionEnum;
    version: PostStopActivityStreamVersionEnum;
}
export declare class PostStopActivityStreamHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostStopActivityStreamRequest extends SpeakeasyBase {
    queryParams: PostStopActivityStreamQueryParams;
    headers: PostStopActivityStreamHeaders;
    request?: Uint8Array;
}
export declare class PostStopActivityStreamResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
