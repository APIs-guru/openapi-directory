import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GeneratePresignedUrlsPublicPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=access_key" })
  accessKey: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=upload_id" })
  uploadId: string;
}


export class GeneratePresignedUrlsPublicHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class GeneratePresignedUrlsPublicRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GeneratePresignedUrlsPublicPathParams;

  @SpeakeasyMetadata()
  headers: GeneratePresignedUrlsPublicHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.GeneratePresignedUrlsRequest;
}


export class GeneratePresignedUrlsPublicResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  presignedUrlList?: shared.PresignedUrlList;

  @SpeakeasyMetadata()
  statusCode: number;
}
