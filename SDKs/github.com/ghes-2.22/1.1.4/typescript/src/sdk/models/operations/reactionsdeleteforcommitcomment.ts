import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ReactionsDeleteForCommitCommentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=comment_id" })
  commentId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=reaction_id" })
  reactionId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReactionsDeleteForCommitCommentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReactionsDeleteForCommitCommentPathParams;
}


export class ReactionsDeleteForCommitCommentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
