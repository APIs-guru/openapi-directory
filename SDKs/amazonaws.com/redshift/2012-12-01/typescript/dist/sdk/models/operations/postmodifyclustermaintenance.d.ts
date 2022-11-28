import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostModifyClusterMaintenanceActionEnum {
    ModifyClusterMaintenance = "ModifyClusterMaintenance"
}
export declare enum PostModifyClusterMaintenanceVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostModifyClusterMaintenanceQueryParams extends SpeakeasyBase {
    action: PostModifyClusterMaintenanceActionEnum;
    version: PostModifyClusterMaintenanceVersionEnum;
}
export declare class PostModifyClusterMaintenanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyClusterMaintenanceRequest extends SpeakeasyBase {
    queryParams: PostModifyClusterMaintenanceQueryParams;
    headers: PostModifyClusterMaintenanceHeaders;
    request?: Uint8Array;
}
export declare class PostModifyClusterMaintenanceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
