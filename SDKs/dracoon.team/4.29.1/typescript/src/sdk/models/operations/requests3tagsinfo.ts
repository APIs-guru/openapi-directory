import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestS3TagsInfoHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestS3TagsInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: RequestS3TagsInfoHeaders;
}


export class RequestS3TagsInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  s3TagList?: shared.S3TagList;

  @SpeakeasyMetadata()
  statusCode: number;
}
