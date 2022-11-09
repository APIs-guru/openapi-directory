import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestS3TagListHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestS3TagListRequest extends SpeakeasyBase {
  @Metadata()
  headers: RequestS3TagListHeaders;
}


export class RequestS3TagListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  s3TagList?: shared.S3TagList;

  @Metadata()
  statusCode: number;
}
