import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDescribeNodeConfigurationOptionsActionEnum {
    DescribeNodeConfigurationOptions = "DescribeNodeConfigurationOptions"
}
export declare enum PostDescribeNodeConfigurationOptionsVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostDescribeNodeConfigurationOptionsQueryParams extends SpeakeasyBase {
    action: PostDescribeNodeConfigurationOptionsActionEnum;
    marker?: string;
    maxRecords?: string;
    version: PostDescribeNodeConfigurationOptionsVersionEnum;
}
export declare class PostDescribeNodeConfigurationOptionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeNodeConfigurationOptionsRequest extends SpeakeasyBase {
    queryParams: PostDescribeNodeConfigurationOptionsQueryParams;
    headers: PostDescribeNodeConfigurationOptionsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeNodeConfigurationOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
