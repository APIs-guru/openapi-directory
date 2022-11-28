import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestS3TagPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class RequestS3TagHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestS3TagRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RequestS3TagPathParams;

  @SpeakeasyMetadata()
  headers: RequestS3TagHeaders;
}


export class RequestS3TagResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  s3Tag?: shared.S3Tag;

  @SpeakeasyMetadata()
  statusCode: number;
}
