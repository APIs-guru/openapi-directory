import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestS3TagPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class RequestS3TagHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestS3TagRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RequestS3TagPathParams;

  @Metadata()
  headers: RequestS3TagHeaders;
}


export class RequestS3TagResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  s3Tag?: shared.S3Tag;

  @Metadata()
  statusCode: number;
}
