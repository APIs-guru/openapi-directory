import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetListDashboardsActionEnum {
    ListDashboards = "ListDashboards"
}
export declare enum GetListDashboardsVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class GetListDashboardsQueryParams extends SpeakeasyBase {
    action: GetListDashboardsActionEnum;
    dashboardNamePrefix?: string;
    nextToken?: string;
    version: GetListDashboardsVersionEnum;
}
export declare class GetListDashboardsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetListDashboardsRequest extends SpeakeasyBase {
    queryParams: GetListDashboardsQueryParams;
    headers: GetListDashboardsHeaders;
}
export declare class GetListDashboardsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
