import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeEventsActionEnum {
    DescribeEvents = "DescribeEvents"
}
export declare enum PostDescribeEventsVersionEnum {
    TwoThousandAndFourteen0901 = "2014-09-01"
}
export declare class PostDescribeEventsQueryParams extends SpeakeasyBase {
    action: PostDescribeEventsActionEnum;
    version: PostDescribeEventsVersionEnum;
}
export declare class PostDescribeEventsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeEventsRequest extends SpeakeasyBase {
    queryParams: PostDescribeEventsQueryParams;
    headers: PostDescribeEventsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeEventsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
