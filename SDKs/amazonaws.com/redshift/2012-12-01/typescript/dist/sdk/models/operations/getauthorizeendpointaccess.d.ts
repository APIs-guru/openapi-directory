import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetAuthorizeEndpointAccessActionEnum {
    AuthorizeEndpointAccess = "AuthorizeEndpointAccess"
}
export declare enum GetAuthorizeEndpointAccessVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetAuthorizeEndpointAccessQueryParams extends SpeakeasyBase {
    account: string;
    action: GetAuthorizeEndpointAccessActionEnum;
    clusterIdentifier?: string;
    version: GetAuthorizeEndpointAccessVersionEnum;
    vpcIds?: string[];
}
export declare class GetAuthorizeEndpointAccessHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetAuthorizeEndpointAccessRequest extends SpeakeasyBase {
    queryParams: GetAuthorizeEndpointAccessQueryParams;
    headers: GetAuthorizeEndpointAccessHeaders;
}
export declare class GetAuthorizeEndpointAccessResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
