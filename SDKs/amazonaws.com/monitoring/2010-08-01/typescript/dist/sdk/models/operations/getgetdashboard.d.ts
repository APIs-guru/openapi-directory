import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetGetDashboardActionEnum {
    GetDashboard = "GetDashboard"
}
export declare enum GetGetDashboardVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class GetGetDashboardQueryParams extends SpeakeasyBase {
    action: GetGetDashboardActionEnum;
    dashboardName: string;
    version: GetGetDashboardVersionEnum;
}
export declare class GetGetDashboardHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGetDashboardRequest extends SpeakeasyBase {
    queryParams: GetGetDashboardQueryParams;
    headers: GetGetDashboardHeaders;
}
export declare class GetGetDashboardResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
