import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeScheduledActionsActionEnum {
    DescribeScheduledActions = "DescribeScheduledActions"
}
export declare enum PostDescribeScheduledActionsVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostDescribeScheduledActionsQueryParams extends SpeakeasyBase {
    action: PostDescribeScheduledActionsActionEnum;
    marker?: string;
    maxRecords?: string;
    version: PostDescribeScheduledActionsVersionEnum;
}
export declare class PostDescribeScheduledActionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeScheduledActionsRequest extends SpeakeasyBase {
    queryParams: PostDescribeScheduledActionsQueryParams;
    headers: PostDescribeScheduledActionsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeScheduledActionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
