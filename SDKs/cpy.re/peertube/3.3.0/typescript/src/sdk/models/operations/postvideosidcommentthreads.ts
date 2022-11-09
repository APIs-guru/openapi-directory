import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostVideosIdCommentThreadsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: any;
}


export class PostVideosIdCommentThreadsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=text" })
  text: Map<string, any>;
}


export class PostVideosIdCommentThreadsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PostVideosIdCommentThreadsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostVideosIdCommentThreadsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostVideosIdCommentThreadsRequestBody;

  @Metadata()
  security: PostVideosIdCommentThreadsSecurity;
}


export class PostVideosIdCommentThreadsResponse extends SpeakeasyBase {
  @Metadata()
  commentThreadPostResponse?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
