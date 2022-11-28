import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListReviewPolicyResultsForHitQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListReviewPolicyResultsForHitxAmzTargetEnum {
    MTurkRequesterServiceV20170117ListReviewPolicyResultsForHit = "MTurkRequesterServiceV20170117.ListReviewPolicyResultsForHIT"
}


export class ListReviewPolicyResultsForHitHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListReviewPolicyResultsForHitxAmzTargetEnum;
}


export class ListReviewPolicyResultsForHitRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListReviewPolicyResultsForHitQueryParams;

  @SpeakeasyMetadata()
  headers: ListReviewPolicyResultsForHitHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ListReviewPolicyResultsForHitRequest;
}


export class ListReviewPolicyResultsForHitResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listReviewPolicyResultsForHitResponse?: shared.ListReviewPolicyResultsForHitResponse;

  @SpeakeasyMetadata()
  requestError?: any;

  @SpeakeasyMetadata()
  serviceFault?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
