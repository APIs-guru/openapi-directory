import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostVideosIdCommentsCommentIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=commentId" })
  commentId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: any;
}


export class PostVideosIdCommentsCommentIdRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=text" })
  text: Map<string, any>;
}


export class PostVideosIdCommentsCommentIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PostVideosIdCommentsCommentIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostVideosIdCommentsCommentIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostVideosIdCommentsCommentIdRequestBody;

  @Metadata()
  security: PostVideosIdCommentsCommentIdSecurity;
}


export class PostVideosIdCommentsCommentIdResponse extends SpeakeasyBase {
  @Metadata()
  commentThreadPostResponse?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
