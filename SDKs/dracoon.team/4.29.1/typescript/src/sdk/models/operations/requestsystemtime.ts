import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestSystemTimeHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class RequestSystemTimeRequest extends SpeakeasyBase {
  @Metadata()
  headers: RequestSystemTimeHeaders;
}


export class RequestSystemTimeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  sdsServerTime?: shared.SdsServerTime;

  @Metadata()
  statusCode: number;
}
