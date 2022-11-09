import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class Request3ConfigHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class Request3ConfigRequest extends SpeakeasyBase {
  @Metadata()
  headers: Request3ConfigHeaders;
}


export class Request3ConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  s3Config?: shared.S3Config;

  @Metadata()
  statusCode: number;
}
