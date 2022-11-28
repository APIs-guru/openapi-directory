import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostVideosIdCommentThreadsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: any;
}


export class PostVideosIdCommentThreadsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=text" })
  text: Map<string, any>;
}


export class PostVideosIdCommentThreadsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PostVideosIdCommentThreadsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostVideosIdCommentThreadsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostVideosIdCommentThreadsRequestBody;

  @SpeakeasyMetadata()
  security: PostVideosIdCommentThreadsSecurity;
}


export class PostVideosIdCommentThreadsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  commentThreadPostResponse?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
