import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GenerateDownloadUrlPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=file_id" })
  fileId: number;
}


export class GenerateDownloadUrlHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class GenerateDownloadUrlRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GenerateDownloadUrlPathParams;

  @Metadata()
  headers: GenerateDownloadUrlHeaders;
}


export class GenerateDownloadUrlResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  downloadTokenGenerateResponse?: shared.DownloadTokenGenerateResponse;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;
}
