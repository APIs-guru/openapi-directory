import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReactionsListForCommitCommentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=comment_id" })
  commentId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}

export enum ReactionsListForCommitCommentContentEnum {
    Plus1 = "+1",
    Minus1 = "-1",
    Laugh = "laugh",
    Confused = "confused",
    Heart = "heart",
    Hooray = "hooray",
    Rocket = "rocket",
    Eyes = "eyes"
}


export class ReactionsListForCommitCommentQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=content" })
  content?: ReactionsListForCommitCommentContentEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ReactionsListForCommitComment415ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class ReactionsListForCommitCommentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReactionsListForCommitCommentPathParams;

  @SpeakeasyMetadata()
  queryParams: ReactionsListForCommitCommentQueryParams;
}


export class ReactionsListForCommitCommentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata({ elemType: shared.Reaction })
  reactions?: shared.Reaction[];

  @SpeakeasyMetadata()
  reactionsListForCommitComment415ApplicationJsonObject?: ReactionsListForCommitComment415ApplicationJson;
}
