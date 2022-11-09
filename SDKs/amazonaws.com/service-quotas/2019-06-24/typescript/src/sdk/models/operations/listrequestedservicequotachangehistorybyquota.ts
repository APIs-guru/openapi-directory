import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListRequestedServiceQuotaChangeHistoryByQuotaQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListRequestedServiceQuotaChangeHistoryByQuotaXAmzTargetEnum {
    ServiceQuotasV20190624ListRequestedServiceQuotaChangeHistoryByQuota = "ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistoryByQuota"
}


export class ListRequestedServiceQuotaChangeHistoryByQuotaHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListRequestedServiceQuotaChangeHistoryByQuotaXAmzTargetEnum;
}


export class ListRequestedServiceQuotaChangeHistoryByQuotaRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListRequestedServiceQuotaChangeHistoryByQuotaQueryParams;

  @Metadata()
  headers: ListRequestedServiceQuotaChangeHistoryByQuotaHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListRequestedServiceQuotaChangeHistoryByQuotaRequest;
}


export class ListRequestedServiceQuotaChangeHistoryByQuotaResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  illegalArgumentException?: any;

  @Metadata()
  invalidPaginationTokenException?: any;

  @Metadata()
  listRequestedServiceQuotaChangeHistoryByQuotaResponse?: shared.ListRequestedServiceQuotaChangeHistoryByQuotaResponse;

  @Metadata()
  noSuchResourceException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
