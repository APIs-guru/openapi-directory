import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostUploadQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=token" })
  token: string;
}


export class PostUploadHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Content-Range" })
  contentRange?: string;
}


export class PostUploadRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostUploadQueryParams;

  @Metadata()
  headers: PostUploadHeaders;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: shared.TokenUploadPayload;
}


export class PostUploadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  badRequest?: shared.BadRequest;

  @Metadata()
  video?: shared.Video;
}
