import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListAssignmentsForHitQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxResults" })
  maxResults?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=NextToken" })
  nextToken?: string;
}

export enum ListAssignmentsForHitxAmzTargetEnum {
    MTurkRequesterServiceV20170117ListAssignmentsForHit = "MTurkRequesterServiceV20170117.ListAssignmentsForHIT"
}


export class ListAssignmentsForHitHeaders extends SpeakeasyBase {
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
  xAmzTarget: ListAssignmentsForHitxAmzTargetEnum;
}


export class ListAssignmentsForHitRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListAssignmentsForHitQueryParams;

  @Metadata()
  headers: ListAssignmentsForHitHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListAssignmentsForHitRequest;
}


export class ListAssignmentsForHitResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listAssignmentsForHitResponse?: shared.ListAssignmentsForHitResponse;

  @Metadata()
  requestError?: any;

  @Metadata()
  serviceFault?: any;

  @Metadata()
  statusCode: number;
}
