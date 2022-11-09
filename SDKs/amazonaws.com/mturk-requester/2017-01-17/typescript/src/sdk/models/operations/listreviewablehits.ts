import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListReviewableHiTsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListReviewableHiTsXAmzTargetEnum {
    MTurkRequesterServiceV20170117ListReviewableHiTs = "MTurkRequesterServiceV20170117.ListReviewableHITs"
}


export class ListReviewableHiTsHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListReviewableHiTsXAmzTargetEnum;
}


export class ListReviewableHiTsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListReviewableHiTsQueryParams;

  @Metadata()
  headers: ListReviewableHiTsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListReviewableHiTsRequest;
}


export class ListReviewableHiTsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listReviewableHiTsResponse?: shared.ListReviewableHiTsResponse;

  @Metadata()
  requestError?: any;

  @Metadata()
  serviceFault?: any;

  @Metadata()
  statusCode: number;
}
