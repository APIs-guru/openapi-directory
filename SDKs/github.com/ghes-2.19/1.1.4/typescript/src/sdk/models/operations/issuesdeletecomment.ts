import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class IssuesDeleteCommentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=comment_id" })
  commentId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class IssuesDeleteCommentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IssuesDeleteCommentPathParams;
}


export class IssuesDeleteCommentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
