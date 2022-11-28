import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostVideosIdCommentsCommentIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=commentId" })
  commentId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: any;
}


export class PostVideosIdCommentsCommentIdRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=text" })
  text: Map<string, any>;
}


export class PostVideosIdCommentsCommentIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PostVideosIdCommentsCommentIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostVideosIdCommentsCommentIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostVideosIdCommentsCommentIdRequestBody;

  @SpeakeasyMetadata()
  security: PostVideosIdCommentsCommentIdSecurity;
}


export class PostVideosIdCommentsCommentIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  commentThreadPostResponse?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
