import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteVideosIdCommentsCommentIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=commentId" })
  commentId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: any;
}


export class DeleteVideosIdCommentsCommentIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class DeleteVideosIdCommentsCommentIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteVideosIdCommentsCommentIdPathParams;

  @Metadata()
  security: DeleteVideosIdCommentsCommentIdSecurity;
}


export class DeleteVideosIdCommentsCommentIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
