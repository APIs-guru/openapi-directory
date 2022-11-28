import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GenerateDownloadUrlPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=file_id" })
  fileId: number;
}


export class GenerateDownloadUrlHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class GenerateDownloadUrlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GenerateDownloadUrlPathParams;

  @SpeakeasyMetadata()
  headers: GenerateDownloadUrlHeaders;
}


export class GenerateDownloadUrlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  downloadTokenGenerateResponse?: shared.DownloadTokenGenerateResponse;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
