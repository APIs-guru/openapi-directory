import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeClustersActionEnum {
    DescribeClusters = "DescribeClusters"
}
export declare enum PostDescribeClustersVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostDescribeClustersQueryParams extends SpeakeasyBase {
    action: PostDescribeClustersActionEnum;
    marker?: string;
    maxRecords?: string;
    version: PostDescribeClustersVersionEnum;
}
export declare class PostDescribeClustersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeClustersRequest extends SpeakeasyBase {
    queryParams: PostDescribeClustersQueryParams;
    headers: PostDescribeClustersHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeClustersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
