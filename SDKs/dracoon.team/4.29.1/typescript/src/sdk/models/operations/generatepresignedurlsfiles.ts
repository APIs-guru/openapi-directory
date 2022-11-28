import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GeneratePresignedUrlsFilesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=upload_id" })
  uploadId: string;
}


export class GeneratePresignedUrlsFilesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class GeneratePresignedUrlsFilesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GeneratePresignedUrlsFilesPathParams;

  @SpeakeasyMetadata()
  headers: GeneratePresignedUrlsFilesHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.GeneratePresignedUrlsRequest;
}


export class GeneratePresignedUrlsFilesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  presignedUrlList?: shared.PresignedUrlList;

  @SpeakeasyMetadata()
  statusCode: number;
}
