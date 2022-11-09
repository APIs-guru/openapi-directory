import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestS3TagsInfoHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestS3TagsInfoRequest extends SpeakeasyBase {
  @Metadata()
  headers: RequestS3TagsInfoHeaders;
}


export class RequestS3TagsInfoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  s3TagList?: shared.S3TagList;

  @Metadata()
  statusCode: number;
}
