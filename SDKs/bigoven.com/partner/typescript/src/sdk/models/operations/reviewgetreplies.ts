import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReviewGetRepliesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=reviewId" })
  reviewId: string;
}


export class ReviewGetRepliesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=pg" })
  pg?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rpp" })
  rpp?: number;
}


export class ReviewGetRepliesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReviewGetRepliesPathParams;

  @Metadata()
  queryParams: ReviewGetRepliesQueryParams;
}


export class ReviewGetRepliesResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.BigOvenModelApiReply })
  bigOvenModelApiReplies?: shared.BigOvenModelApiReply[];

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
