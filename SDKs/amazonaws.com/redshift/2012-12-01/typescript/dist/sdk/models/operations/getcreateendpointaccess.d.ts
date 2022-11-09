import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetCreateEndpointAccessActionEnum {
    CreateEndpointAccess = "CreateEndpointAccess"
}
export declare enum GetCreateEndpointAccessVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetCreateEndpointAccessQueryParams extends SpeakeasyBase {
    action: GetCreateEndpointAccessActionEnum;
    clusterIdentifier?: string;
    endpointName: string;
    resourceOwner?: string;
    subnetGroupName: string;
    version: GetCreateEndpointAccessVersionEnum;
    vpcSecurityGroupIds?: string[];
}
export declare class GetCreateEndpointAccessHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCreateEndpointAccessRequest extends SpeakeasyBase {
    queryParams: GetCreateEndpointAccessQueryParams;
    headers: GetCreateEndpointAccessHeaders;
}
export declare class GetCreateEndpointAccessResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
