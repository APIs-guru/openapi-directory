import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeAnomalyDetectorsActionEnum {
    DescribeAnomalyDetectors = "DescribeAnomalyDetectors"
}
export declare enum PostDescribeAnomalyDetectorsVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class PostDescribeAnomalyDetectorsQueryParams extends SpeakeasyBase {
    action: PostDescribeAnomalyDetectorsActionEnum;
    version: PostDescribeAnomalyDetectorsVersionEnum;
}
export declare class PostDescribeAnomalyDetectorsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeAnomalyDetectorsRequest extends SpeakeasyBase {
    queryParams: PostDescribeAnomalyDetectorsQueryParams;
    headers: PostDescribeAnomalyDetectorsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeAnomalyDetectorsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
