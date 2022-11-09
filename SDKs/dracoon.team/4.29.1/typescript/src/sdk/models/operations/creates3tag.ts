import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateS3TagHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class CreateS3TagRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateS3TagHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.S3TagCreateRequest;
}


export class CreateS3TagResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  s3Tag?: shared.S3Tag;

  @Metadata()
  statusCode: number;
}
