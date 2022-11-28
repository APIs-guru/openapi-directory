import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetModifyClusterMaintenanceActionEnum {
    ModifyClusterMaintenance = "ModifyClusterMaintenance"
}
export declare enum GetModifyClusterMaintenanceVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GetModifyClusterMaintenanceQueryParams extends SpeakeasyBase {
    action: GetModifyClusterMaintenanceActionEnum;
    clusterIdentifier: string;
    deferMaintenance?: boolean;
    deferMaintenanceDuration?: number;
    deferMaintenanceEndTime?: Date;
    deferMaintenanceIdentifier?: string;
    deferMaintenanceStartTime?: Date;
    version: GetModifyClusterMaintenanceVersionEnum;
}
export declare class GetModifyClusterMaintenanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetModifyClusterMaintenanceRequest extends SpeakeasyBase {
    queryParams: GetModifyClusterMaintenanceQueryParams;
    headers: GetModifyClusterMaintenanceHeaders;
}
export declare class GetModifyClusterMaintenanceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
