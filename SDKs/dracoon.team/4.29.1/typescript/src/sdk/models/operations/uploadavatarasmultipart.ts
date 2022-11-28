import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UploadAvatarAsMultipartHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class UploadAvatarAsMultipartRequestBodyFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=file" })
  file: string;
}


export class UploadAvatarAsMultipartRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  file?: UploadAvatarAsMultipartRequestBodyFile;
}


export class UploadAvatarAsMultipartRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: UploadAvatarAsMultipartHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: UploadAvatarAsMultipartRequestBody;
}


export class UploadAvatarAsMultipartResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  avatar?: shared.Avatar;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
