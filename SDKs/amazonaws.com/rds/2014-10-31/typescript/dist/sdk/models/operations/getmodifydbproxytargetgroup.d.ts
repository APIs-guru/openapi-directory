import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetModifyDbProxyTargetGroupActionEnum {
    ModifyDbProxyTargetGroup = "ModifyDBProxyTargetGroup"
}
/**
 * Specifies the settings that control the size and behavior of the connection pool associated with a <code>DBProxyTargetGroup</code>.
**/
export declare class GetModifyDbProxyTargetGroupConnectionPoolConfig extends SpeakeasyBase {
    connectionBorrowTimeout?: number;
    initQuery?: string;
    maxConnectionsPercent?: number;
    maxIdleConnectionsPercent?: number;
    sessionPinningFilters?: string[];
}
export declare enum GetModifyDbProxyTargetGroupVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GetModifyDbProxyTargetGroupQueryParams extends SpeakeasyBase {
    action: GetModifyDbProxyTargetGroupActionEnum;
    connectionPoolConfig?: GetModifyDbProxyTargetGroupConnectionPoolConfig;
    dbProxyName: string;
    newName?: string;
    targetGroupName: string;
    version: GetModifyDbProxyTargetGroupVersionEnum;
}
export declare class GetModifyDbProxyTargetGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModifyDbProxyTargetGroupRequest extends SpeakeasyBase {
    queryParams: GetModifyDbProxyTargetGroupQueryParams;
    headers: GetModifyDbProxyTargetGroupHeaders;
}
export declare class GetModifyDbProxyTargetGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
