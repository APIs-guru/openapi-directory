import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetComplianceSummaryQueryParams extends SpeakeasyBase {
    maxResults?: string;
    paginationToken?: string;
}
export declare enum GetComplianceSummaryXAmzTargetEnum {
    ResourceGroupsTaggingApi20170126GetComplianceSummary = "ResourceGroupsTaggingAPI_20170126.GetComplianceSummary"
}
export declare class GetComplianceSummaryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetComplianceSummaryXAmzTargetEnum;
}
export declare class GetComplianceSummaryRequest extends SpeakeasyBase {
    queryParams: GetComplianceSummaryQueryParams;
    headers: GetComplianceSummaryHeaders;
    request: shared.GetComplianceSummaryInput;
}
export declare class GetComplianceSummaryResponse extends SpeakeasyBase {
    constraintViolationException?: any;
    contentType: string;
    getComplianceSummaryOutput?: shared.GetComplianceSummaryOutput;
    internalServiceException?: any;
    invalidParameterException?: any;
    statusCode: number;
    throttledException?: any;
}
