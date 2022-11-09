import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeOptionGroupOptionsActionEnum {
    DescribeOptionGroupOptions = "DescribeOptionGroupOptions"
}
export declare enum PostDescribeOptionGroupOptionsVersionEnum {
    TwoThousandAndFourteen0901 = "2014-09-01"
}
export declare class PostDescribeOptionGroupOptionsQueryParams extends SpeakeasyBase {
    action: PostDescribeOptionGroupOptionsActionEnum;
    version: PostDescribeOptionGroupOptionsVersionEnum;
}
export declare class PostDescribeOptionGroupOptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeOptionGroupOptionsRequest extends SpeakeasyBase {
    queryParams: PostDescribeOptionGroupOptionsQueryParams;
    headers: PostDescribeOptionGroupOptionsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeOptionGroupOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
