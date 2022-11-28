import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostFileCommentsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=body" })
  body: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=path" })
  path: string;
}


export class PostFileCommentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: PostFileCommentsRequestBody;
}


export class PostFileCommentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  fileCommentEntity?: shared.FileCommentEntity;

  @SpeakeasyMetadata()
  statusCode: number;
}
