import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatchMessageCommentsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PatchMessageCommentsIdRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=body" })
  body: string;
}


export class PatchMessageCommentsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchMessageCommentsIdPathParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: PatchMessageCommentsIdRequestBody;
}


export class PatchMessageCommentsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  messageCommentEntity?: shared.MessageCommentEntity;

  @Metadata()
  statusCode: number;
}
