import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateFileUploadChannelHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class CreateFileUploadChannelRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateFileUploadChannelHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateFileUploadRequest;
}


export class CreateFileUploadChannelResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createFileUploadResponse?: shared.CreateFileUploadResponse;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
