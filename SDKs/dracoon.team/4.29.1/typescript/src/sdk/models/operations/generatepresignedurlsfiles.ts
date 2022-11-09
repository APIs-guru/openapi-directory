import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GeneratePresignedUrlsFilesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=upload_id" })
  uploadId: string;
}


export class GeneratePresignedUrlsFilesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class GeneratePresignedUrlsFilesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GeneratePresignedUrlsFilesPathParams;

  @Metadata()
  headers: GeneratePresignedUrlsFilesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GeneratePresignedUrlsRequest;
}


export class GeneratePresignedUrlsFilesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  presignedUrlList?: shared.PresignedUrlList;

  @Metadata()
  statusCode: number;
}
