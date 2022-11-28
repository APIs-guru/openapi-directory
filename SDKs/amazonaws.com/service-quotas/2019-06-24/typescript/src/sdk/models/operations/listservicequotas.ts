import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListServiceQuotasQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListServiceQuotasXAmzTargetEnum {
    ServiceQuotasV20190624ListServiceQuotas = "ServiceQuotasV20190624.ListServiceQuotas"
}


export class ListServiceQuotasHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListServiceQuotasXAmzTargetEnum;
}


export class ListServiceQuotasRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListServiceQuotasQueryParams;

  @SpeakeasyMetadata()
  headers: ListServiceQuotasHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ListServiceQuotasRequest;
}


export class ListServiceQuotasResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  illegalArgumentException?: any;

  @SpeakeasyMetadata()
  invalidPaginationTokenException?: any;

  @SpeakeasyMetadata()
  listServiceQuotasResponse?: shared.ListServiceQuotasResponse;

  @SpeakeasyMetadata()
  noSuchResourceException?: any;

  @SpeakeasyMetadata()
  serviceException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
