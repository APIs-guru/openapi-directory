import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeEndpointAuthorizationActionEnum {
    DescribeEndpointAuthorization = "DescribeEndpointAuthorization"
}
export declare enum GetDescribeEndpointAuthorizationVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetDescribeEndpointAuthorizationQueryParams extends SpeakeasyBase {
    account?: string;
    action: GetDescribeEndpointAuthorizationActionEnum;
    clusterIdentifier?: string;
    grantee?: boolean;
    marker?: string;
    maxRecords?: number;
    version: GetDescribeEndpointAuthorizationVersionEnum;
}
export declare class GetDescribeEndpointAuthorizationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeEndpointAuthorizationRequest extends SpeakeasyBase {
    queryParams: GetDescribeEndpointAuthorizationQueryParams;
    headers: GetDescribeEndpointAuthorizationHeaders;
}
export declare class GetDescribeEndpointAuthorizationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
