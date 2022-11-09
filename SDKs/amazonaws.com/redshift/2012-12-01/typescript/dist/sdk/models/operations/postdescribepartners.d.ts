import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribePartnersActionEnum {
    DescribePartners = "DescribePartners"
}
export declare enum PostDescribePartnersVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostDescribePartnersQueryParams extends SpeakeasyBase {
    action: PostDescribePartnersActionEnum;
    version: PostDescribePartnersVersionEnum;
}
export declare class PostDescribePartnersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribePartnersRequest extends SpeakeasyBase {
    queryParams: PostDescribePartnersQueryParams;
    headers: PostDescribePartnersHeaders;
    request?: Uint8Array;
}
export declare class PostDescribePartnersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
