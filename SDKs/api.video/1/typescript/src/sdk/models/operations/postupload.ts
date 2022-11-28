import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostUploadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" })
  token: string;
}


export class PostUploadHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Content-Range" })
  contentRange?: string;
}


export class PostUploadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostUploadQueryParams;

  @SpeakeasyMetadata()
  headers: PostUploadHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: shared.TokenUploadPayload;
}


export class PostUploadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  badRequest?: shared.BadRequest;

  @SpeakeasyMetadata()
  video?: shared.Video;
}
