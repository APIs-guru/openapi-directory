import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestLogOperationsSyslogQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=is_deprecated" })
  isDeprecated?: boolean;
}


export class RequestLogOperationsSyslogHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestLogOperationsSyslogRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: RequestLogOperationsSyslogQueryParams;

  @Metadata()
  headers: RequestLogOperationsSyslogHeaders;
}


export class RequestLogOperationsSyslogResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  logOperationList?: shared.LogOperationList;

  @Metadata()
  statusCode: number;
}
