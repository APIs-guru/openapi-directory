import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GenerateDownloadUrlPublicPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=access_key" })
  accessKey: string;
}


export class GenerateDownloadUrlPublicRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GenerateDownloadUrlPublicPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PublicDownloadTokenGenerateRequest;
}


export class GenerateDownloadUrlPublicResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  publicDownloadTokenGenerateResponse?: shared.PublicDownloadTokenGenerateResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
