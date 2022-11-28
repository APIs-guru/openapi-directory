import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequestLogOperationsSyslogQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_deprecated" })
  isDeprecated?: boolean;
}


export class RequestLogOperationsSyslogHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestLogOperationsSyslogRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: RequestLogOperationsSyslogQueryParams;

  @SpeakeasyMetadata()
  headers: RequestLogOperationsSyslogHeaders;
}


export class RequestLogOperationsSyslogResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  logOperationList?: shared.LogOperationList;

  @SpeakeasyMetadata()
  statusCode: number;
}
