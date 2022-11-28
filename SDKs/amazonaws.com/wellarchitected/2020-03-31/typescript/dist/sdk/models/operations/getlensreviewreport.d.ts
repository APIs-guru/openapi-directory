import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLensReviewReportPathParams extends SpeakeasyBase {
    lensAlias: string;
    workloadId: string;
}
export declare class GetLensReviewReportQueryParams extends SpeakeasyBase {
    milestoneNumber?: number;
}
export declare class GetLensReviewReportHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetLensReviewReportRequest extends SpeakeasyBase {
    pathParams: GetLensReviewReportPathParams;
    queryParams: GetLensReviewReportQueryParams;
    headers: GetLensReviewReportHeaders;
}
export declare class GetLensReviewReportResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getLensReviewReportOutput?: shared.GetLensReviewReportOutput;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
