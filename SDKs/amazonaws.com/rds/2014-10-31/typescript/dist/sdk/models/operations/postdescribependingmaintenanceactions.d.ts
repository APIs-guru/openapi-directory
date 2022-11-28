import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostDescribePendingMaintenanceActionsActionEnum {
    DescribePendingMaintenanceActions = "DescribePendingMaintenanceActions"
}
export declare enum PostDescribePendingMaintenanceActionsVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostDescribePendingMaintenanceActionsQueryParams extends SpeakeasyBase {
    action: PostDescribePendingMaintenanceActionsActionEnum;
    marker?: string;
    maxRecords?: string;
    version: PostDescribePendingMaintenanceActionsVersionEnum;
}
export declare class PostDescribePendingMaintenanceActionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDescribePendingMaintenanceActionsRequest extends SpeakeasyBase {
    queryParams: PostDescribePendingMaintenanceActionsQueryParams;
    headers: PostDescribePendingMaintenanceActionsHeaders;
    request?: Uint8Array;
}
export declare class PostDescribePendingMaintenanceActionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
