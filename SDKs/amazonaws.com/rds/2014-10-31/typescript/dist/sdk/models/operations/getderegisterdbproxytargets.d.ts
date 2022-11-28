import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeregisterDbProxyTargetsActionEnum {
    DeregisterDbProxyTargets = "DeregisterDBProxyTargets"
}
export declare enum GetDeregisterDbProxyTargetsVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GetDeregisterDbProxyTargetsQueryParams extends SpeakeasyBase {
    action: GetDeregisterDbProxyTargetsActionEnum;
    dbClusterIdentifiers?: string[];
    dbInstanceIdentifiers?: string[];
    dbProxyName: string;
    targetGroupName?: string;
    version: GetDeregisterDbProxyTargetsVersionEnum;
}
export declare class GetDeregisterDbProxyTargetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeregisterDbProxyTargetsRequest extends SpeakeasyBase {
    queryParams: GetDeregisterDbProxyTargetsQueryParams;
    headers: GetDeregisterDbProxyTargetsHeaders;
}
export declare class GetDeregisterDbProxyTargetsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
