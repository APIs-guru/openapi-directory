import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateS3ConfigHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class CreateS3ConfigRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateS3ConfigHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.S3ConfigCreateRequest;
}


export class CreateS3ConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  s3Config?: shared.S3Config;

  @Metadata()
  statusCode: number;
}
