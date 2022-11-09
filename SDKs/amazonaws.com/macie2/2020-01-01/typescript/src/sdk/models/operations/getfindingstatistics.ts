import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetFindingStatisticsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// GetFindingStatisticsRequestBodyFindingCriteria
/** 
 * Specifies, as a map, one or more property-based conditions that filter the results of a query for findings.
**/
export class GetFindingStatisticsRequestBodyFindingCriteria extends SpeakeasyBase {
  @Metadata({ data: "json, name=criterion", elemType: shared.CriterionAdditionalProperties })
  criterion?: Map<string, shared.CriterionAdditionalProperties>;
}

export enum GetFindingStatisticsRequestBodyGroupByEnum {
    ResourcesAffectedS3BucketName = "resourcesAffected.s3Bucket.name"
,    Type = "type"
,    ClassificationDetailsJobId = "classificationDetails.jobId"
,    SeverityDescription = "severity.description"
}


// GetFindingStatisticsRequestBodySortCriteria
/** 
 * Specifies criteria for sorting the results of a query that retrieves aggregated statistical data about findings.
**/
export class GetFindingStatisticsRequestBodySortCriteria extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributeName" })
  attributeName?: shared.FindingStatisticsSortAttributeNameEnum;

  @Metadata({ data: "json, name=orderBy" })
  orderBy?: shared.OrderByEnum;
}


export class GetFindingStatisticsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=findingCriteria" })
  findingCriteria?: GetFindingStatisticsRequestBodyFindingCriteria;

  @Metadata({ data: "json, name=groupBy" })
  groupBy: GetFindingStatisticsRequestBodyGroupByEnum;

  @Metadata({ data: "json, name=size" })
  size?: number;

  @Metadata({ data: "json, name=sortCriteria" })
  sortCriteria?: GetFindingStatisticsRequestBodySortCriteria;
}


export class GetFindingStatisticsRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetFindingStatisticsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: GetFindingStatisticsRequestBody;
}


export class GetFindingStatisticsResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  conflictException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  getFindingStatisticsResponse?: shared.GetFindingStatisticsResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceQuotaExceededException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
