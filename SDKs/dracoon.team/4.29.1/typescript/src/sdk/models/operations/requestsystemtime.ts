import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestSystemTimeHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Date-Format" })
  xSdsDateFormat?: any;
}


export class RequestSystemTimeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: RequestSystemTimeHeaders;
}


export class RequestSystemTimeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  sdsServerTime?: shared.SdsServerTime;

  @SpeakeasyMetadata()
  statusCode: number;
}
