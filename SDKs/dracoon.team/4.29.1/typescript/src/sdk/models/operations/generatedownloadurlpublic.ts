import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GenerateDownloadUrlPublicPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=access_key" })
  accessKey: string;
}


export class GenerateDownloadUrlPublicRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GenerateDownloadUrlPublicPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PublicDownloadTokenGenerateRequest;
}


export class GenerateDownloadUrlPublicResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  publicDownloadTokenGenerateResponse?: shared.PublicDownloadTokenGenerateResponse;

  @Metadata()
  statusCode: number;
}
