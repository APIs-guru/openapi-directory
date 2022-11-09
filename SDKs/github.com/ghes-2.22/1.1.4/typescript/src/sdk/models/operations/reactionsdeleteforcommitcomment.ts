import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ReactionsDeleteForCommitCommentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=comment_id" })
  commentId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=reaction_id" })
  reactionId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReactionsDeleteForCommitCommentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReactionsDeleteForCommitCommentPathParams;
}


export class ReactionsDeleteForCommitCommentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
