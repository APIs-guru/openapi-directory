import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetApplyPendingMaintenanceActionActionEnum {
    ApplyPendingMaintenanceAction = "ApplyPendingMaintenanceAction"
}
export declare enum GetApplyPendingMaintenanceActionVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GetApplyPendingMaintenanceActionQueryParams extends SpeakeasyBase {
    action: GetApplyPendingMaintenanceActionActionEnum;
    applyAction: string;
    optInType: string;
    resourceIdentifier: string;
    version: GetApplyPendingMaintenanceActionVersionEnum;
}
export declare class GetApplyPendingMaintenanceActionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetApplyPendingMaintenanceActionRequest extends SpeakeasyBase {
    queryParams: GetApplyPendingMaintenanceActionQueryParams;
    headers: GetApplyPendingMaintenanceActionHeaders;
}
export declare class GetApplyPendingMaintenanceActionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
