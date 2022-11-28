import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateS3TagHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class CreateS3TagRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateS3TagHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.S3TagCreateRequest;
}


export class CreateS3TagResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  s3Tag?: shared.S3Tag;

  @SpeakeasyMetadata()
  statusCode: number;
}
