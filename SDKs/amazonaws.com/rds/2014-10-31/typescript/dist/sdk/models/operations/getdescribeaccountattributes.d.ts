import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeAccountAttributesActionEnum {
    DescribeAccountAttributes = "DescribeAccountAttributes"
}
export declare enum GetDescribeAccountAttributesVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GetDescribeAccountAttributesQueryParams extends SpeakeasyBase {
    action: GetDescribeAccountAttributesActionEnum;
    version: GetDescribeAccountAttributesVersionEnum;
}
export declare class GetDescribeAccountAttributesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeAccountAttributesRequest extends SpeakeasyBase {
    queryParams: GetDescribeAccountAttributesQueryParams;
    headers: GetDescribeAccountAttributesHeaders;
}
export declare class GetDescribeAccountAttributesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
