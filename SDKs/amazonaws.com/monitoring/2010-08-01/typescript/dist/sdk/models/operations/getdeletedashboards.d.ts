import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetDeleteDashboardsActionEnum {
    DeleteDashboards = "DeleteDashboards"
}
export declare enum GetDeleteDashboardsVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class GetDeleteDashboardsQueryParams extends SpeakeasyBase {
    action: GetDeleteDashboardsActionEnum;
    dashboardNames: string[];
    version: GetDeleteDashboardsVersionEnum;
}
export declare class GetDeleteDashboardsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteDashboardsRequest extends SpeakeasyBase {
    queryParams: GetDeleteDashboardsQueryParams;
    headers: GetDeleteDashboardsHeaders;
}
export declare class GetDeleteDashboardsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
