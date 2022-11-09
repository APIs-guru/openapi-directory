import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostFileCommentsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=body" })
  body: string;

  @Metadata({ data: "multipart_form, name=path" })
  path: string;
}


export class PostFileCommentsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: PostFileCommentsRequestBody;
}


export class PostFileCommentsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  fileCommentEntity?: shared.FileCommentEntity;

  @Metadata()
  statusCode: number;
}
