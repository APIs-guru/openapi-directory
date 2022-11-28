import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReposUpdateCommitCommentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=comment_id" })
  commentId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposUpdateCommitCommentRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body: string;
}


export class ReposUpdateCommitCommentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposUpdateCommitCommentPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ReposUpdateCommitCommentRequestBody;
}


export class ReposUpdateCommitCommentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  commitComment?: shared.CommitComment;
}
