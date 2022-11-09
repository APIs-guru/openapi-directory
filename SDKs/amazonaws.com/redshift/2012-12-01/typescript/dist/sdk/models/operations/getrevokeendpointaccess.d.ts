import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetRevokeEndpointAccessActionEnum {
    RevokeEndpointAccess = "RevokeEndpointAccess"
}
export declare enum GetRevokeEndpointAccessVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetRevokeEndpointAccessQueryParams extends SpeakeasyBase {
    account?: string;
    action: GetRevokeEndpointAccessActionEnum;
    clusterIdentifier?: string;
    force?: boolean;
    version: GetRevokeEndpointAccessVersionEnum;
    vpcIds?: string[];
}
export declare class GetRevokeEndpointAccessHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetRevokeEndpointAccessRequest extends SpeakeasyBase {
    queryParams: GetRevokeEndpointAccessQueryParams;
    headers: GetRevokeEndpointAccessHeaders;
}
export declare class GetRevokeEndpointAccessResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
