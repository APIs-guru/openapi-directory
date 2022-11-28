import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchFileCommentsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PatchFileCommentsIdRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=body" })
  body: string;
}


export class PatchFileCommentsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchFileCommentsIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: PatchFileCommentsIdRequestBody;
}


export class PatchFileCommentsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  fileCommentEntity?: shared.FileCommentEntity;

  @SpeakeasyMetadata()
  statusCode: number;
}
