import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDeliverabilityTestReportPathParams extends SpeakeasyBase {
    reportId: string;
}
export declare class GetDeliverabilityTestReportHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeliverabilityTestReportRequest extends SpeakeasyBase {
    pathParams: GetDeliverabilityTestReportPathParams;
    headers: GetDeliverabilityTestReportHeaders;
}
export declare class GetDeliverabilityTestReportResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getDeliverabilityTestReportResponse?: shared.GetDeliverabilityTestReportResponse;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
