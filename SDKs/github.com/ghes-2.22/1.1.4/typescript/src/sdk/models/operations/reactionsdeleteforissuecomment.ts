import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ReactionsDeleteForIssueCommentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=comment_id" })
  commentId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=reaction_id" })
  reactionId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReactionsDeleteForIssueCommentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReactionsDeleteForIssueCommentPathParams;
}


export class ReactionsDeleteForIssueCommentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
