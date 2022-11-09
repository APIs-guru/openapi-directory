import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListRequestedServiceQuotaChangeHistoryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListRequestedServiceQuotaChangeHistoryXAmzTargetEnum {
    ServiceQuotasV20190624ListRequestedServiceQuotaChangeHistory = "ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistory"
}


export class ListRequestedServiceQuotaChangeHistoryHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListRequestedServiceQuotaChangeHistoryXAmzTargetEnum;
}


export class ListRequestedServiceQuotaChangeHistoryRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListRequestedServiceQuotaChangeHistoryQueryParams;

  @Metadata()
  headers: ListRequestedServiceQuotaChangeHistoryHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListRequestedServiceQuotaChangeHistoryRequest;
}


export class ListRequestedServiceQuotaChangeHistoryResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  illegalArgumentException?: any;

  @Metadata()
  invalidPaginationTokenException?: any;

  @Metadata()
  listRequestedServiceQuotaChangeHistoryResponse?: shared.ListRequestedServiceQuotaChangeHistoryResponse;

  @Metadata()
  noSuchResourceException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
