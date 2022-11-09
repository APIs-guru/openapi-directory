import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RequestLogOperationsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=is_deprecated" })
  isDeprecated?: boolean;
}


export class RequestLogOperationsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RequestLogOperationsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: RequestLogOperationsQueryParams;

  @Metadata()
  headers: RequestLogOperationsHeaders;
}


export class RequestLogOperationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponse?: shared.ErrorResponse;

  @Metadata()
  logOperationList?: shared.LogOperationList;

  @Metadata()
  statusCode: number;
}
