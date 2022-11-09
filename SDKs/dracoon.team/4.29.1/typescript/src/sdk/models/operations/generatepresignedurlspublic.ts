import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GeneratePresignedUrlsPublicPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=access_key" })
  accessKey: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=upload_id" })
  uploadId: string;
}


export class GeneratePresignedUrlsPublicHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class GeneratePresignedUrlsPublicRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GeneratePresignedUrlsPublicPathParams;

  @Metadata()
  headers: GeneratePresignedUrlsPublicHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GeneratePresignedUrlsRequest;
}


export class GeneratePresignedUrlsPublicResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  presignedUrlList?: shared.PresignedUrlList;

  @Metadata()
  statusCode: number;
}
