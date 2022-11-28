import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateShareUploadChannelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=access_key" })
  accessKey: string;
}


export class CreateShareUploadChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateShareUploadChannelPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreateShareUploadChannelRequest;
}


export class CreateShareUploadChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createShareUploadChannelResponse?: shared.CreateShareUploadChannelResponse;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
