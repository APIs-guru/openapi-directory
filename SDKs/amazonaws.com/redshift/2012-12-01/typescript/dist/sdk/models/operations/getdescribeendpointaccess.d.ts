import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDescribeEndpointAccessActionEnum {
    DescribeEndpointAccess = "DescribeEndpointAccess"
}
export declare enum GetDescribeEndpointAccessVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetDescribeEndpointAccessQueryParams extends SpeakeasyBase {
    action: GetDescribeEndpointAccessActionEnum;
    clusterIdentifier?: string;
    endpointName?: string;
    marker?: string;
    maxRecords?: number;
    resourceOwner?: string;
    version: GetDescribeEndpointAccessVersionEnum;
    vpcId?: string;
}
export declare class GetDescribeEndpointAccessHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDescribeEndpointAccessRequest extends SpeakeasyBase {
    queryParams: GetDescribeEndpointAccessQueryParams;
    headers: GetDescribeEndpointAccessHeaders;
}
export declare class GetDescribeEndpointAccessResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
