import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeDashboardPathParams extends SpeakeasyBase {
    dashboardId: string;
}
export declare class DescribeDashboardHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeDashboardRequest extends SpeakeasyBase {
    pathParams: DescribeDashboardPathParams;
    headers: DescribeDashboardHeaders;
}
export declare class DescribeDashboardResponse extends SpeakeasyBase {
    contentType: string;
    describeDashboardResponse?: shared.DescribeDashboardResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
