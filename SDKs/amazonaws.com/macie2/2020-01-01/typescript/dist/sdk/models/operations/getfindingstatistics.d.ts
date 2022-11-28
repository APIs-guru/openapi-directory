import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFindingStatisticsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Specifies, as a map, one or more property-based conditions that filter the results of a query for findings.
**/
export declare class GetFindingStatisticsRequestBodyFindingCriteria extends SpeakeasyBase {
    criterion?: Map<string, shared.CriterionAdditionalProperties>;
}
export declare enum GetFindingStatisticsRequestBodyGroupByEnum {
    ResourcesAffectedS3BucketName = "resourcesAffected.s3Bucket.name",
    Type = "type",
    ClassificationDetailsJobId = "classificationDetails.jobId",
    SeverityDescription = "severity.description"
}
/**
 * Specifies criteria for sorting the results of a query that retrieves aggregated statistical data about findings.
**/
export declare class GetFindingStatisticsRequestBodySortCriteria extends SpeakeasyBase {
    attributeName?: shared.FindingStatisticsSortAttributeNameEnum;
    orderBy?: shared.OrderByEnum;
}
export declare class GetFindingStatisticsRequestBody extends SpeakeasyBase {
    findingCriteria?: GetFindingStatisticsRequestBodyFindingCriteria;
    groupBy: GetFindingStatisticsRequestBodyGroupByEnum;
    size?: number;
    sortCriteria?: GetFindingStatisticsRequestBodySortCriteria;
}
export declare class GetFindingStatisticsRequest extends SpeakeasyBase {
    headers: GetFindingStatisticsHeaders;
    request: GetFindingStatisticsRequestBody;
}
export declare class GetFindingStatisticsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    getFindingStatisticsResponse?: shared.GetFindingStatisticsResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
