import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReviewGetRepliesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=reviewId" })
  reviewId: string;
}


export class ReviewGetRepliesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pg" })
  pg?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rpp" })
  rpp?: number;
}


export class ReviewGetRepliesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReviewGetRepliesPathParams;

  @SpeakeasyMetadata()
  queryParams: ReviewGetRepliesQueryParams;
}


export class ReviewGetRepliesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.BigOvenModelApiReply })
  bigOvenModelApiReplies?: shared.BigOvenModelApiReply[];

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
