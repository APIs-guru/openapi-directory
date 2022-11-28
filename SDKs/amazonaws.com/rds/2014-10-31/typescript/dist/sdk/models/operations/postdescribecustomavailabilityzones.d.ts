import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribeCustomAvailabilityZonesActionEnum {
    DescribeCustomAvailabilityZones = "DescribeCustomAvailabilityZones"
}
export declare enum PostDescribeCustomAvailabilityZonesVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostDescribeCustomAvailabilityZonesQueryParams extends SpeakeasyBase {
    action: PostDescribeCustomAvailabilityZonesActionEnum;
    marker?: string;
    maxRecords?: string;
    version: PostDescribeCustomAvailabilityZonesVersionEnum;
}
export declare class PostDescribeCustomAvailabilityZonesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribeCustomAvailabilityZonesRequest extends SpeakeasyBase {
    queryParams: PostDescribeCustomAvailabilityZonesQueryParams;
    headers: PostDescribeCustomAvailabilityZonesHeaders;
    request?: Uint8Array;
}
export declare class PostDescribeCustomAvailabilityZonesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
