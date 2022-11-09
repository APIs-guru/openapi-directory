import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListReviewPolicyResultsForHitQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListReviewPolicyResultsForHitxAmzTargetEnum {
    MTurkRequesterServiceV20170117ListReviewPolicyResultsForHit = "MTurkRequesterServiceV20170117.ListReviewPolicyResultsForHIT"
}


export class ListReviewPolicyResultsForHitHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListReviewPolicyResultsForHitxAmzTargetEnum;
}


export class ListReviewPolicyResultsForHitRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListReviewPolicyResultsForHitQueryParams;

  @Metadata()
  headers: ListReviewPolicyResultsForHitHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListReviewPolicyResultsForHitRequest;
}


export class ListReviewPolicyResultsForHitResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listReviewPolicyResultsForHitResponse?: shared.ListReviewPolicyResultsForHitResponse;

  @Metadata()
  requestError?: any;

  @Metadata()
  serviceFault?: any;

  @Metadata()
  statusCode: number;
}
