import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchMessageCommentsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PatchMessageCommentsIdRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=body" })
  body: string;
}


export class PatchMessageCommentsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchMessageCommentsIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: PatchMessageCommentsIdRequestBody;
}


export class PatchMessageCommentsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  messageCommentEntity?: shared.MessageCommentEntity;

  @SpeakeasyMetadata()
  statusCode: number;
}
