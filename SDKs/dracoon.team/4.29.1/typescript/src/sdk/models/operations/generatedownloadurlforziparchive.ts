import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GenerateDownloadUrlForZipArchiveHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class GenerateDownloadUrlForZipArchiveRequest extends SpeakeasyBase {
  @Metadata()
  headers: GenerateDownloadUrlForZipArchiveHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ZipDownloadRequest;
}


export class GenerateDownloadUrlForZipArchiveResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  downloadTokenGenerateResponse?: shared.DownloadTokenGenerateResponse;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
