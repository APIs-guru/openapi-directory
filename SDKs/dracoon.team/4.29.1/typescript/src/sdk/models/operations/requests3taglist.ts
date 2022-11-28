import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestS3TagListHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestS3TagListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: RequestS3TagListHeaders;
}


export class RequestS3TagListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  s3TagList?: shared.S3TagList;

  @SpeakeasyMetadata()
  statusCode: number;
}
