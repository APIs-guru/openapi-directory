import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeSourceRegionsActionEnum {
    DescribeSourceRegions = "DescribeSourceRegions"
}
export declare enum PostDescribeSourceRegionsVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostDescribeSourceRegionsQueryParams extends SpeakeasyBase {
    action: PostDescribeSourceRegionsActionEnum;
    marker?: string;
    maxRecords?: string;
    version: PostDescribeSourceRegionsVersionEnum;
}
export declare class PostDescribeSourceRegionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeSourceRegionsRequest extends SpeakeasyBase {
    queryParams: PostDescribeSourceRegionsQueryParams;
    headers: PostDescribeSourceRegionsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeSourceRegionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
