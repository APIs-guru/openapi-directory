import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class IssuesDeleteCommentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=comment_id" })
  commentId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class IssuesDeleteCommentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IssuesDeleteCommentPathParams;
}


export class IssuesDeleteCommentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
