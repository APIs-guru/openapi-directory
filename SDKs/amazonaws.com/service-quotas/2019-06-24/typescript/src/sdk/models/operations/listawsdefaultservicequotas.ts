import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListAwsDefaultServiceQuotasQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListAwsDefaultServiceQuotasXAmzTargetEnum {
    ServiceQuotasV20190624ListAwsDefaultServiceQuotas = "ServiceQuotasV20190624.ListAWSDefaultServiceQuotas"
}


export class ListAwsDefaultServiceQuotasHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListAwsDefaultServiceQuotasXAmzTargetEnum;
}


export class ListAwsDefaultServiceQuotasRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListAwsDefaultServiceQuotasQueryParams;

  @Metadata()
  headers: ListAwsDefaultServiceQuotasHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListAwsDefaultServiceQuotasRequest;
}


export class ListAwsDefaultServiceQuotasResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  illegalArgumentException?: any;

  @Metadata()
  invalidPaginationTokenException?: any;

  @Metadata()
  listAwsDefaultServiceQuotasResponse?: shared.ListAwsDefaultServiceQuotasResponse;

  @Metadata()
  noSuchResourceException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  tooManyRequestsException?: any;
}
