import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetFindingStatisticsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// GetFindingStatisticsRequestBodyFindingCriteria
/** 
 * Specifies, as a map, one or more property-based conditions that filter the results of a query for findings.
**/
export class GetFindingStatisticsRequestBodyFindingCriteria extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=criterion", elemType: shared.CriterionAdditionalProperties })
  criterion?: Map<string, shared.CriterionAdditionalProperties>;
}

export enum GetFindingStatisticsRequestBodyGroupByEnum {
    ResourcesAffectedS3BucketName = "resourcesAffected.s3Bucket.name",
    Type = "type",
    ClassificationDetailsJobId = "classificationDetails.jobId",
    SeverityDescription = "severity.description"
}


// GetFindingStatisticsRequestBodySortCriteria
/** 
 * Specifies criteria for sorting the results of a query that retrieves aggregated statistical data about findings.
**/
export class GetFindingStatisticsRequestBodySortCriteria extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributeName" })
  attributeName?: shared.FindingStatisticsSortAttributeNameEnum;

  @SpeakeasyMetadata({ data: "json, name=orderBy" })
  orderBy?: shared.OrderByEnum;
}


export class GetFindingStatisticsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=findingCriteria" })
  findingCriteria?: GetFindingStatisticsRequestBodyFindingCriteria;

  @SpeakeasyMetadata({ data: "json, name=groupBy" })
  groupBy: GetFindingStatisticsRequestBodyGroupByEnum;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=sortCriteria" })
  sortCriteria?: GetFindingStatisticsRequestBodySortCriteria;
}


export class GetFindingStatisticsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetFindingStatisticsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: GetFindingStatisticsRequestBody;
}


export class GetFindingStatisticsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getFindingStatisticsResponse?: shared.GetFindingStatisticsResponse;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  serviceQuotaExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;

  @SpeakeasyMetadata()
  validationException?: any;
}
