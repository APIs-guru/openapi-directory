import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetRegisterDbProxyTargetsActionEnum {
    RegisterDbProxyTargets = "RegisterDBProxyTargets"
}
export declare enum GetRegisterDbProxyTargetsVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GetRegisterDbProxyTargetsQueryParams extends SpeakeasyBase {
    action: GetRegisterDbProxyTargetsActionEnum;
    dbClusterIdentifiers?: string[];
    dbInstanceIdentifiers?: string[];
    dbProxyName: string;
    targetGroupName?: string;
    version: GetRegisterDbProxyTargetsVersionEnum;
}
export declare class GetRegisterDbProxyTargetsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetRegisterDbProxyTargetsRequest extends SpeakeasyBase {
    queryParams: GetRegisterDbProxyTargetsQueryParams;
    headers: GetRegisterDbProxyTargetsHeaders;
}
export declare class GetRegisterDbProxyTargetsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
