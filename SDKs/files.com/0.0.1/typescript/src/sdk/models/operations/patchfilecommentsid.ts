import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatchFileCommentsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PatchFileCommentsIdRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=body" })
  body: string;
}


export class PatchFileCommentsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchFileCommentsIdPathParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: PatchFileCommentsIdRequestBody;
}


export class PatchFileCommentsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  fileCommentEntity?: shared.FileCommentEntity;

  @Metadata()
  statusCode: number;
}
