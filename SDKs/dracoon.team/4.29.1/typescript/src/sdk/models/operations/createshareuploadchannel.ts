import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateShareUploadChannelPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=access_key" })
  accessKey: string;
}


export class CreateShareUploadChannelRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateShareUploadChannelPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateShareUploadChannelRequest;
}


export class CreateShareUploadChannelResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createShareUploadChannelResponse?: shared.CreateShareUploadChannelResponse;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
