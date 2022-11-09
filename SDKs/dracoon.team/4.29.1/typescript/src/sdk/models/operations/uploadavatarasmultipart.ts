import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UploadAvatarAsMultipartHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class UploadAvatarAsMultipartRequestBodyFile extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=file" })
  file: string;
}


export class UploadAvatarAsMultipartRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, file=true" })
  file?: UploadAvatarAsMultipartRequestBodyFile;
}


export class UploadAvatarAsMultipartRequest extends SpeakeasyBase {
  @Metadata()
  headers: UploadAvatarAsMultipartHeaders;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: UploadAvatarAsMultipartRequestBody;
}


export class UploadAvatarAsMultipartResponse extends SpeakeasyBase {
  @Metadata()
  avatar?: shared.Avatar;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
