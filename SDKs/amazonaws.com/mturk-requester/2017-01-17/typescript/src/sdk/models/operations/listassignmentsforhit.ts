import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListAssignmentsForHitQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListAssignmentsForHitxAmzTargetEnum {
    MTurkRequesterServiceV20170117ListAssignmentsForHit = "MTurkRequesterServiceV20170117.ListAssignmentsForHIT"
}


export class ListAssignmentsForHitHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListAssignmentsForHitxAmzTargetEnum;
}


export class ListAssignmentsForHitRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListAssignmentsForHitQueryParams;

  @SpeakeasyMetadata()
  headers: ListAssignmentsForHitHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ListAssignmentsForHitRequest;
}


export class ListAssignmentsForHitResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listAssignmentsForHitResponse?: shared.ListAssignmentsForHitResponse;

  @SpeakeasyMetadata()
  requestError?: any;

  @SpeakeasyMetadata()
  serviceFault?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
