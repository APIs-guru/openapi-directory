import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListRequestedServiceQuotaChangeHistoryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListRequestedServiceQuotaChangeHistoryXAmzTargetEnum {
    ServiceQuotasV20190624ListRequestedServiceQuotaChangeHistory = "ServiceQuotasV20190624.ListRequestedServiceQuotaChangeHistory"
}


export class ListRequestedServiceQuotaChangeHistoryHeaders extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: ListRequestedServiceQuotaChangeHistoryXAmzTargetEnum;
}


export class ListRequestedServiceQuotaChangeHistoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListRequestedServiceQuotaChangeHistoryQueryParams;

  @SpeakeasyMetadata()
  headers: ListRequestedServiceQuotaChangeHistoryHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ListRequestedServiceQuotaChangeHistoryRequest;
}


export class ListRequestedServiceQuotaChangeHistoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  illegalArgumentException?: any;

  @SpeakeasyMetadata()
  invalidPaginationTokenException?: any;

  @SpeakeasyMetadata()
  listRequestedServiceQuotaChangeHistoryResponse?: shared.ListRequestedServiceQuotaChangeHistoryResponse;

  @SpeakeasyMetadata()
  noSuchResourceException?: any;

  @SpeakeasyMetadata()
  serviceException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
