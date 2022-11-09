import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestSystemDefaultsInfoHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestSystemDefaultsInfoRequest extends SpeakeasyBase {
  @Metadata()
  headers: RequestSystemDefaultsInfoHeaders;
}


export class RequestSystemDefaultsInfoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  systemDefaults?: shared.SystemDefaults;
}
