import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class Request3ConfigHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class Request3ConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: Request3ConfigHeaders;
}


export class Request3ConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  s3Config?: shared.S3Config;

  @SpeakeasyMetadata()
  statusCode: number;
}
