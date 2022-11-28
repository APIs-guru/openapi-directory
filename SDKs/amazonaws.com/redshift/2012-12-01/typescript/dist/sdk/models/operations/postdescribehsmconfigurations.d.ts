import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeHsmConfigurationsActionEnum {
    DescribeHsmConfigurations = "DescribeHsmConfigurations"
}
export declare enum PostDescribeHsmConfigurationsVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostDescribeHsmConfigurationsQueryParams extends SpeakeasyBase {
    action: PostDescribeHsmConfigurationsActionEnum;
    marker?: string;
    maxRecords?: string;
    version: PostDescribeHsmConfigurationsVersionEnum;
}
export declare class PostDescribeHsmConfigurationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeHsmConfigurationsRequest extends SpeakeasyBase {
    queryParams: PostDescribeHsmConfigurationsQueryParams;
    headers: PostDescribeHsmConfigurationsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeHsmConfigurationsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
