import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetPutDashboardActionEnum {
    PutDashboard = "PutDashboard"
}
export declare enum GetPutDashboardVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class GetPutDashboardQueryParams extends SpeakeasyBase {
    action: GetPutDashboardActionEnum;
    dashboardBody: string;
    dashboardName: string;
    version: GetPutDashboardVersionEnum;
}
export declare class GetPutDashboardHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetPutDashboardRequest extends SpeakeasyBase {
    queryParams: GetPutDashboardQueryParams;
    headers: GetPutDashboardHeaders;
}
export declare class GetPutDashboardResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
