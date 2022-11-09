import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetComplianceSummaryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PaginationToken" })
  paginationToken?: string;
}

export enum GetComplianceSummaryXAmzTargetEnum {
    ResourceGroupsTaggingApi20170126GetComplianceSummary = "ResourceGroupsTaggingAPI_20170126.GetComplianceSummary"
}


export class GetComplianceSummaryHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: GetComplianceSummaryXAmzTargetEnum;
}


export class GetComplianceSummaryRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetComplianceSummaryQueryParams;

  @Metadata()
  headers: GetComplianceSummaryHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetComplianceSummaryInput;
}


export class GetComplianceSummaryResponse extends SpeakeasyBase {
  @Metadata()
  constraintViolationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  getComplianceSummaryOutput?: shared.GetComplianceSummaryOutput;

  @Metadata()
  internalServiceException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttledException?: any;
}
