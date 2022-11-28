import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GenerateDownloadUrlForZipArchiveHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class GenerateDownloadUrlForZipArchiveRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GenerateDownloadUrlForZipArchiveHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ZipDownloadRequest;
}


export class GenerateDownloadUrlForZipArchiveResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  downloadTokenGenerateResponse?: shared.DownloadTokenGenerateResponse;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
