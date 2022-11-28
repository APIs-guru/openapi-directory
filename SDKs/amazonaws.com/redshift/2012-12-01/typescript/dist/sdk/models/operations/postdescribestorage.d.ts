import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeStorageActionEnum {
    DescribeStorage = "DescribeStorage"
}
export declare enum PostDescribeStorageVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostDescribeStorageQueryParams extends SpeakeasyBase {
    action: PostDescribeStorageActionEnum;
    version: PostDescribeStorageVersionEnum;
}
export declare class PostDescribeStorageHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeStorageRequest extends SpeakeasyBase {
    queryParams: PostDescribeStorageQueryParams;
    headers: PostDescribeStorageHeaders;
}
export declare class PostDescribeStorageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
